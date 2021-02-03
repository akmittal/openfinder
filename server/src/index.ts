import { default as express, Request, Response, Router, json, urlencoded, static as staticServer } from "express";
import multer, { FileFilterCallback } from "multer";
import fs, { readdirSync } from "fs";
import { join, resolve, extname } from "path";
import cors from "cors";
import sharp from "sharp";
import { Connection, createConnection } from "typeorm";  
import mime from "mime";


// const app = express()
// createConnection().then((connection) => {
//   app.use("/", bootstrap(connection, resolve("./uploads")))
//   app.listen(5000, () => {
//     console.log("started")
//   })
// })


export function bootstrap(connection: Connection, uploadPath:string):Router {
 
  const router = Router()

  router.use(cors());
  const checkMimeList = ['video','image'];

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
        checkMimeList.includes(mime.getType(join(source, dirent.name).split('/')[0]))
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
      const filename = `${removeExtension(
        file.originalname
      )}-${Date.now()}.${getExtension(file.originalname)}`;
      req.destinationPath = join(req.destinationDir, filename);
      cb(null, filename);
    },
  });

  function fileFilter(
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
  ) {
    if (file.mimetype.split("/")[0] === "image" || file.mimetype.split("/")[0] === "video") {
      cb(null, true);
    } else {
      cb(new Error("Invalid file format"));
    }
  }

  const upload = multer({
    storage,
    limits: { fileSize: 200 * 1024 * 1024 },
    fileFilter: fileFilter,
  });

  router
    .route("/directory")
    .post((req:Request, res:Response) => {
      const { context, dir } = req.body;
      const resolvedPath = join(uploadPath, context, dir);
      fs.mkdirSync(resolvedPath);
      res.json({ msg: "hello" });
    })
    .get((req:Request, res:Response) => {
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

  router.route("/rename").post((req:Request, res:Response) => {
    let { context, filename, newFilename } = req.body;
    if(!newFilename.includes(".")){
      newFilename = `${newFilename}${extname(filename)}`;
    }
    const resolvedSource = join(uploadPath, context, filename);
    const resolvedTarget = join(uploadPath, context, newFilename);
    fs.renameSync(resolvedSource, resolvedTarget);
    res.json({ msg: "done" });
  });

  router
    .route("/file")
    .post(
      upload.single("file"),
      async (req: Request & { destinationPath: string }, res) => {
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
      }
    )
    .get(async (req:Request, res:Response) => {
      try {
        const context: any = req.query.context;
        const resolvedDir = join(uploadPath, context);
        const files = getFiles(resolvedDir).map(async (file: any) => {
          const absPath = join(resolvedDir, file.name);
          const filestats = fs.statSync(absPath);
          const fileType = await mime.getType(absPath);
          let imageMeta: any = { width: -1, height: -1 };
          try {
            const image = sharp(absPath);
            imageMeta = await image.metadata();
          } catch (e) {}

          const xmp = await readDescription(absPath.replace(uploadPath, ""));

          return {
            ...file,
            path: absPath.replace(uploadPath, ""),
            size: filestats.size,
            modified: filestats.mtime,
            width: imageMeta.width,
            height: imageMeta.height,
            description: xmp,
            type: fileType?.split('/')[0]
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

  router.use("/static", staticServer(uploadPath));
 


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
  return router
}
