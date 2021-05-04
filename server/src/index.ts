import {
  default as express,
  Request,
  Response,
  Router,
  json,
  urlencoded,
  static as staticServer,
} from "express";
import multer, { FileFilterCallback } from "multer";
import fs, { readdirSync } from "fs";
import { join, resolve, extname } from "path";
import cors from "cors";
import sharp from "sharp";
import { Connection, createConnection } from "typeorm";
import mime from "mime";
import { CompressImage } from "./util/compress";
import { spawnSync } from "child_process";

// const app = express();
// createConnection().then((connection) => {
//   app.use("/", bootstrap(connection, resolve("./uploads")));
//   app.listen(5000, () => {
//     console.log("started");
//   });
// });

export function bootstrap(connection: Connection, uploadPath: string): Router {
  const router = Router();

  router.use(cors());
  const checkMimeList = ["video", "image"];

  function removeExtension(filename: string) {
    return filename.split(".").slice(0, -1).join(".");
  }
  function getExtension(filename: string) {
    return filename.split(".").slice(-1)[0];
  }

  const getDirectories = (source: string) =>
    readdirSync(source, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

  const getFiles = (source: string) =>
    readdirSync(source, { withFileTypes: true }).filter(
      (dirent) =>
        !dirent.isDirectory() &&
        checkMimeList.includes(
          mime.getType(join(source, dirent.name))?.split("/")[0]
        )
    );

  router.use(json());
  router.use(urlencoded({ extended: true }));

  const storage = multer.diskStorage({
    destination: async (
      req: Request & { destinationDir: string },
      file,
      cb
    ) => {
      let path: any = req.header("path") || "/";
      if (path === "undefined") {
        path = "/";
      }

      const resolvedPath = join(uploadPath, path);
      if (!fs.existsSync(resolvedPath)) {
        fs.mkdirSync(resolvedPath, { recursive: true });
      }
      req["destinationDir"] = resolvedPath;
      cb(null, resolvedPath);
    },
    filename: (
      req: Request & { destinationDir: string; destinationPath: string },
      file,
      cb
    ) => {
      const filename = file.originalname;
      req.destinationPath = join(req.destinationDir, filename);
      cb(null, filename);
    },
  });

  function fileFilter(
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
  ) {
    let path: any = req.header('path') || '/';
    const resolvedPath = join(uploadPath, path, file.originalname);
    if (checkMimeList.includes(file.mimetype.split("/")[0])) {
      if (!fs.existsSync(resolvedPath)) {
        cb(null, true);
      } else {
        cb(new Error('Image already exits, please try another image'));
      }
    } else {
      cb(new Error('Invalid file format'));
    }
  }

  const upload = multer({
    storage,
    limits: { fileSize: 200 * 1024 * 1024 },
    fileFilter: fileFilter,
  }).single('file');

  router
    .route("/directory")
    .post((req: Request, res: Response) => {
      const { context, dir } = req.body;
      const resolvedPath = join(uploadPath, context, dir);
      if (!fs.existsSync(resolvedPath)) {
        fs.mkdirSync(resolvedPath);
        return res.json({ msg: 'directory created successfully' });
      }
      res.statusMessage = 'Directory already exit';
      return res.status(500).send('file already exits');
    })
    .get((req: Request, res: Response) => {
      const context: any = req.query.context;
      const resolvedPath = join(uploadPath, context);
      let dirs = getDirectories(resolvedPath).map((dir) => ({
        name: dir,
        path: join(resolvedPath, dir).replace(uploadPath, ""),
        isLeafNode: getDirectories(join(resolvedPath, dir)).length === 0,
      }));
      if (dirs.length === 0) {
        dirs = null;
      }
      res.json({ data: dirs });
    });

  router.route("/rename").post(async (req: Request, res: Response) => {
    let { context, filename, newFilename, filePath } = req.body;
    filePath = decodeURIComponent(filePath);
    try {
      if (!newFilename.includes(".")) {
        newFilename = `${newFilename}${extname(filename)}`;
      }
      const resolvedSource = join(uploadPath, context, filename);
      const resolvedTarget = join(uploadPath, context, newFilename);
      if (!fs.existsSync(resolvedTarget)) {
        fs.renameSync(resolvedSource, resolvedTarget);
        await connection
          .getRepository("image")
          .createQueryBuilder()
          .update("image")
          .set({ name: newFilename, path: join(context, newFilename) })
          .where("path=:path", { path: filePath })
          .execute();
        res.json({ msg: "done" });
      } else {
        throw new Error("Image Already exit");
      }
    } catch (e) {
      console.log("Error in Rename op", e);
      res.statusMessage = e;
      res.status(500).send(e.toString());
    }
  });
  // another multer instance for file replace
  const imgReplaceMulterInst = multer({
    limits: { fileSize: 20 * 1024 * 1024 },
    fileFilter: fileFilter,
  });

  router
    .route("/replace")
    .post(imgReplaceMulterInst.single("file"), async (req: Request, res) => {
      try {
        let imagePath: any = req.query.path;
        imagePath = decodeURIComponent(imagePath);
        let file = req.file;
        const resolvedSource = join(uploadPath, imagePath);

        const outStream = fs.createWriteStream(resolvedSource);
        outStream.write(file.buffer);
        outStream.end();
        outStream.on("finish", function (err: any) {
          if (!err) {
            res.json({ msg: "done" });
          }
        });
      } catch (err) {
        res.status(500).send(err.toString());
        console.error(err);
      }
    });
  router.route("/delete").post(async (req: Request, res: Response) => {
    let { context, filename, filePath } = req.body;
    filePath = decodeURIComponent(filePath);
    try {
      const resolvedSource = join(uploadPath,filePath);
      fs.unlinkSync(resolvedSource);
      await connection
        .getRepository("image")
        .createQueryBuilder()
        .delete()
        .where("path=:path", { path: filePath })
        .execute();
      res.json({ msg: "done" });
    } catch (e) {
      console.log("Error in Delete Operation", e);
      res.status(500).send(e.toString());
    }
  });

  router
    .route("/delete/directory")
    .post(async (req: Request, res: Response) => {
      let { context } = req.body;
      const filterCondition = {
        path: `${context}%`,
      };
      try {
        const resolvedSource = join(uploadPath, context);
        const { stderr, stdout, status } = spawnSync("rm", [
          "-r",
          resolvedSource,
        ]);
        if (status === 0) {
          await connection
            .getRepository("image")
            .createQueryBuilder()
            .delete()
            .where("path like :path", filterCondition)
            .execute();
          res.json({ msg: "directory deleted successfully" });
        }
        if (status !== 0) {
          throw new Error('No such file or directory exit');
        }
      } catch (e) {
        console.error('Error in Delete Directory Operation', e);
        res.statusMessage = e;
        res.status(500).send(e);
      }
    });

  router.route("/move/image").post(async (req: Request, res: Response) => {
    let { context, filename, newPath } = req.body;
    const resolvedSource = join(uploadPath, context, filename);
    const resolvedTarget = join(uploadPath, newPath, filename);
    try {
      if (!fs.existsSync(resolvedTarget)) {
        fs.renameSync(resolvedSource, resolvedTarget);
        await connection
          .getRepository("image")
          .createQueryBuilder()
          .update("image")
          .set({ path: join(newPath, filename) })
          .where("path=:path", { path: join(context, filename) })
          .execute();
        res.json({ msg: "done" });
      } else {
        throw new Error('Image Already exit');
      }
    } catch (err) {
      console.log('Error in Move Operation', err);
      res.statusMessage = err;
      res.status(500).send(err.toString());
    }
  });

  router
    .route("/rename/directory")
    .post(async (req: Request, res: Response) => {
      let { context, newDirname, leafNode } = req.body;
      const resolvedCurrDir = join(uploadPath, context);
      const lastPosition = context.lastIndexOf(leafNode);
      const newPath = context.substring(0, lastPosition) + newDirname;

      const resolvedTarget = join(
        uploadPath,
        context.substring(0, lastPosition),
        newDirname
      );
      try {
        if (!fs.existsSync(resolvedTarget)) {
          fs.renameSync(resolvedCurrDir, resolvedTarget);

          await connection
            .getRepository("image")
            .createQueryBuilder()
            .update("image")
            .set({
              path: () =>
                `CONCAT('${newPath}',SUBSTR(path,${
                  context.length + 1
                },LENGTH(path)) )`,
            })
            .where(`path LIKE :path`, { path: `${context}%` })
            .execute();

          res.json({ msg: "done" });
        } else {
          throw new Error('Directory already exits');
        }
      } catch (err) {
        console.error('Error in rename directory operation', err);
        res.statusMessage = err;
        res.status(500).send(err.toString());
      }
    });

  router.route("/move/directory").post(async (req: Request, res: Response) => {
    let { context, newPath, currentDir, leafNode } = req.body;
    const resolvedCurrDir = join(uploadPath, currentDir);
    let lastIndexNode = currentDir.lastIndexOf(leafNode);
    const sublastnode = currentDir.substring(
      lastIndexNode - 1,
      currentDir.length
    );
    if (newPath === "/") {
      newPath = "";
    }
    const resolvedTarget = join(uploadPath, newPath, sublastnode);

    try {
      if (!fs.existsSync(resolvedTarget)) {
        fs.renameSync(resolvedCurrDir, resolvedTarget);
        await connection
          .getRepository("image")
          .createQueryBuilder()
          .update("image")
          .set({
            path: () =>
              `CONCAT('${newPath}',SUBSTR(path,${lastIndexNode},LENGTH(path)) )`,
          })
          .where(`path LIKE :path`, { path: `${currentDir}%` })
          .execute();
        res.json({ msg: "done" });
      } else {
        throw new Error('Directory already exits');
      }
    } catch (err) {
      console.error('Error in move directory operation', err);
      res.statusMessage = err;
      res.status(500).send(err);
    }
  });

  router.route("/search").get(async (req: Request, res) => {
    try {
      let keyword: any = req.query.key;
      let filterCondition = {
        name: `%${keyword}%`,
        path: `%${keyword}%`,
      };
      let files = await connection
        .getRepository("image")
        .createQueryBuilder("image")
        .select(["image.name", "image.path", "image.alt"])
        .where(
          "image.name like :name OR image.path like :path",
          filterCondition
        )
        .getMany();
      if (files) {
        files = files
          .filter((file: any) => {
            if (fs.existsSync(join(uploadPath, file.path))) {
              return file;
            }
          })
          .map(async (file: any, index: any) => {
            const absPath = join(uploadPath, file.path);
            const filestats = fs.statSync(absPath);
            const fileType = await mime.getType(absPath);
            let imageMeta: any = { width: -1, height: -1 };

            if (fileType.split("/")[0] !== "video") {
              const image = sharp(absPath);
              imageMeta = await image.metadata();
            }
            return {
              name: file.name,
              path: absPath
                .replace(uploadPath, "")
                .replace(file.name, encodeURIComponent(file.name)),
              size: filestats.size,
              modified: filestats.mtime,
              width: imageMeta.width,
              height: imageMeta.height,
              description: file.alt,
              type: fileType?.split("/")[0],
            };
          });
      }
      const data = await Promise.all(files);
      res.json({ data });
    } catch (err) {
      res.send(err);
      console.error(err);
    }
  });

  router
    .route("/file")
    .post((req: Request & { destinationPath: string }, res) => {
      upload(req, res, async (err: any) => {
        if (err) {
          return res.status(500).json(err.message);
        }
        CompressImage(req.destinationPath);
        const r = await connection
          .getRepository("image")
          .createQueryBuilder()
          .insert()
          .into("image")
          .values({
            name: req.file.originalname,
            path: req.destinationPath.replace(uploadPath, ""),
            alt: req.file.originalname,
            updateDate: new Date(),
          })
          .execute();
        res.json({ r });
      });
    })
    .get(async (req: Request, res: Response) => {
      try {
        const context: any = req.query.context;
        const resolvedDir = join(uploadPath, context);
        const files = getFiles(resolvedDir).map(async (file: any) => {
          const absPath = join(resolvedDir, file.name);
          const filestats = fs.statSync(absPath);
          const fileType = await mime.getType(absPath);
          let imageMeta: any = { width: -1, height: -1 };
          try {
            if (fileType.split("/")[0] !== "video") {
              const image = sharp(absPath);
              imageMeta = await image.metadata();
            }
          } catch (e) {
            console.error(e);
          }

          const xmp = await readDescription(absPath.replace(uploadPath, ""));

          return {
            ...file,

            path: absPath
              .replace(uploadPath, "")
              .replace(file.name, encodeURIComponent(file.name)),
            size: filestats.size,
            modified: filestats.mtime,
            width: imageMeta.width,
            height: imageMeta.height,
            description: xmp,
            type: fileType?.split("/")[0],
          };
        });
        const data = await Promise.all(files);
        res.json({ data });
      } catch (e) {
        console.error(e);
      }
    });

  router.post("/meta", async (req: Request, res: Response) => {
    try {
      const { context, filename, description } = req.body;
      const resolvedSource = join(context, filename);

      await writeDescription(resolvedSource, description);
      res.json({ done: true });
    } catch (e) {
      console.error(e);
    }
  });

  router.use("/static", staticServer(uploadPath, {
    cacheControl: false
  }));

  async function readDescription(path: string) {
    const res: any = await connection
      .getRepository("image")
      .findOne({ where: { path } });
    return res ? res.alt : "";
  }

  async function writeDescription(path: string, description: string) {
    return connection
      .getRepository("image")
      .update({ path }, { alt: description });
  }
  return router;
}
