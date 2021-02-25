"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importStar(require("fs"));
const path_1 = require("path");
const cors_1 = __importDefault(require("cors"));
const sharp_1 = __importDefault(require("sharp"));
const mime_1 = __importDefault(require("mime"));
const compress_1 = require("./util/compress");
// const app = express()
// createConnection().then((connection) => {
//   app.use("/", bootstrap(connection, resolve("./uploads")))
//   app.listen(5000, () => {
//     console.log("started")
//   })
// })
function bootstrap(connection, uploadPath) {
    const router = express_1.Router();
    router.use(cors_1.default());
    const checkMimeList = ['video', 'image'];
    function removeExtension(filename) {
        return filename.split(".").slice(0, -1).join(".");
    }
    function getExtension(filename) {
        return filename.split(".").slice(-1)[0];
    }
    const getDirectories = (source) => fs_1.readdirSync(source, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
    const getFiles = (source) => fs_1.readdirSync(source, { withFileTypes: true }).filter((dirent) => {
        var _a;
        return !dirent.isDirectory() &&
            checkMimeList.includes((_a = mime_1.default.getType(path_1.join(source, dirent.name))) === null || _a === void 0 ? void 0 : _a.split('/')[0]);
    });
    router.use(express_1.json());
    router.use(express_1.urlencoded({ extended: true }));
    const storage = multer_1.default.diskStorage({
        destination: async (req, file, cb) => {
            let path = req.header("path") || "/";
            if (path === "undefined") {
                path = "/";
            }
            const resolvedPath = path_1.join(uploadPath, path);
            if (!fs_1.default.existsSync(resolvedPath)) {
                fs_1.default.mkdirSync(resolvedPath, { recursive: true });
            }
            req["destinationDir"] = resolvedPath;
            cb(null, resolvedPath);
        },
        filename: (req, file, cb) => {
            const filename = file.originalname;
            req.destinationPath = path_1.join(req.destinationDir, filename);
            cb(null, filename);
        },
    });
    function fileFilter(req, file, cb) {
        if (checkMimeList.includes(file.mimetype.split("/")[0])) {
            cb(null, true);
        }
        else {
            cb(new Error("Invalid file format"));
        }
    }
    const upload = multer_1.default({
        storage,
        limits: { fileSize: 200 * 1024 * 1024 },
        fileFilter: fileFilter,
    });
    router
        .route("/directory")
        .post((req, res) => {
        const { context, dir } = req.body;
        const resolvedPath = path_1.join(uploadPath, context, dir);
        fs_1.default.mkdirSync(resolvedPath);
        res.json({ msg: "hello" });
    })
        .get((req, res) => {
        const context = req.query.context;
        const resolvedPath = path_1.join(uploadPath, context);
        let dirs = getDirectories(resolvedPath).map((dir) => ({
            name: dir,
            path: path_1.join(resolvedPath, dir).replace(uploadPath, ""),
            isLeafNode: getDirectories(path_1.join(resolvedPath, dir)).length === 0,
        }));
        if (dirs.length === 0) {
            dirs = null;
        }
        res.json({ data: dirs });
    });
    router.route("/rename").post(async (req, res) => {
        let { context, filename, newFilename, filePath } = req.body;
        try {
            if (!newFilename.includes(".")) {
                newFilename = `${newFilename}${path_1.extname(filename)}`;
            }
            const resolvedSource = path_1.join(uploadPath, context, filename);
            const resolvedTarget = path_1.join(uploadPath, context, newFilename);
            fs_1.default.renameSync(resolvedSource, resolvedTarget);
            await connection
                .getRepository("image")
                .createQueryBuilder()
                .update("image")
                .set({ name: newFilename, path: path_1.join(context, newFilename) })
                .where("path=:path", { path: filePath })
                .execute();
            res.json({ msg: "done" });
        }
        catch (e) {
            console.log("Error in Rename op", e);
        }
    });
    // another multer instance for file replace
    const imgReplaceMulterInst = multer_1.default({
        limits: { fileSize: 20 * 1024 * 1024 },
        fileFilter: fileFilter,
    });
    router
        .route("/replace")
        .post(imgReplaceMulterInst.single("file"), async (req, res) => {
        try {
            let imagePath = req.query.path;
            let file = req.file;
            const filename = imagePath.replace("/", "");
            const resolvedSource = path_1.join(uploadPath, filename);
            const outStream = fs_1.default.createWriteStream(resolvedSource);
            outStream.write(file.buffer);
            outStream.end();
            outStream.on("finish", function (err) {
                if (!err) {
                    res.json({ msg: "done" });
                }
            });
        }
        catch (err) {
            console.error(err);
        }
    });
    router
        .route("/file")
        .post(upload.single("file"), async (req, res) => {
        compress_1.CompressImage(req.destinationPath);
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
    })
        .get(async (req, res) => {
        try {
            const context = req.query.context;
            const resolvedDir = path_1.join(uploadPath, context);
            const files = getFiles(resolvedDir).map(async (file) => {
                const absPath = path_1.join(resolvedDir, file.name);
                const filestats = fs_1.default.statSync(absPath);
                const fileType = await mime_1.default.getType(absPath);
                let imageMeta = { width: -1, height: -1 };
                try {
                    if (fileType.split('/')[0] !== 'video') {
                        const image = sharp_1.default(absPath);
                        imageMeta = await image.metadata();
                    }
                }
                catch (e) {
                    console.error(e);
                }
                const xmp = await readDescription(absPath.replace(uploadPath, ""));
                return Object.assign(Object.assign({}, file), { path: absPath.replace(uploadPath, "").replace(file.name, encodeURIComponent(file.name)), size: filestats.size, modified: filestats.mtime, width: imageMeta.width, height: imageMeta.height, description: xmp, type: fileType === null || fileType === void 0 ? void 0 : fileType.split('/')[0] });
            });
            const data = await Promise.all(files);
            res.json({ data });
        }
        catch (e) {
            console.error(e);
        }
    });
    router.post("/meta", async (req, res) => {
        try {
            const { context, filename, description } = req.body;
            const resolvedSource = path_1.join(context, filename);
            await writeDescription(resolvedSource, description);
            res.json({ done: true });
        }
        catch (e) {
            console.error(e);
        }
    });
    router.use("/static", express_1.static(uploadPath));
    async function readDescription(path) {
        const res = await connection
            .getRepository("image")
            .findOne({ where: { path } });
        return res ? res.alt : "";
    }
    async function writeDescription(path, description) {
        return connection
            .getRepository("image")
            .update({ path }, { alt: description });
    }
    return router;
}
exports.bootstrap = bootstrap;
