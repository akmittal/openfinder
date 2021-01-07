"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var multer_1 = require("multer");
var fs_1 = require("fs");
var path_1 = require("path");
var cors_1 = require("cors");
var sharp_1 = require("sharp");
var piexifjs_1 = require("piexifjs");
var app = express_1["default"]();
var PORT = 3000;
var uploadPath = path_1.join(process.cwd(), "uploads");
app.use(cors_1["default"]());
function removeExtension(filename) {
    return filename.split(".").slice(0, -1).join(".");
}
function getExtension(filename) {
    return filename.split(".").slice(-1)[0];
}
var getDirectories = function (source) {
    return fs_1.readdirSync(source, { withFileTypes: true })
        .filter(function (dirent) { return dirent.isDirectory(); })
        .map(function (dirent) { return dirent.name; });
};
var getFiles = function (source) {
    return fs_1.readdirSync(source, { withFileTypes: true }).filter(function (dirent) { return !dirent.isDirectory(); });
};
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
var storage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) { return __awaiter(void 0, void 0, void 0, function () {
        var path, resolvedPath;
        return __generator(this, function (_a) {
            path = req.header("path") || "/";
            if (path === "undefined") {
                path = "/";
            }
            resolvedPath = path_1.join(uploadPath, path);
            if (!fs_1["default"].existsSync(resolvedPath)) {
                fs_1["default"].mkdirSync(resolvedPath, { recursive: true });
            }
            cb(null, resolvedPath);
            return [2 /*return*/];
        });
    }); },
    filename: function (req, file, cb) {
        var filename = removeExtension(file.originalname) + "-" + Date.now() + "." + getExtension(file.originalname);
        cb(null, filename);
    }
});
function fileFilter(req, file, cb) {
    if (file.mimetype.split("/")[0] === "image") {
        cb(null, true);
    }
    else {
        cb(new Error("Invalid file format"));
    }
}
var upload = multer_1["default"]({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: fileFilter
});
app
    .route("/directory")
    .post(function (req, res) {
    var _a = req.body, context = _a.context, dir = _a.dir;
    var resolvedPath = path_1.join(uploadPath, context, dir);
    fs_1["default"].mkdirSync(resolvedPath);
    res.json({ msg: "hello" });
})
    .get(function (req, res) {
    var context = req.query.context;
    var resolvedPath = path_1.join(uploadPath, context);
    var dirs = getDirectories(resolvedPath).map(function (dir) { return ({
        name: dir,
        path: path_1.join(resolvedPath, dir).replace(uploadPath, ""),
        isLeafNode: getDirectories(path_1.join(resolvedPath, dir)).length === 0
    }); });
    if (dirs.length === 0) {
        dirs = null;
    }
    res.json({ data: dirs });
});
app.route("/rename").post(function (req, res) {
    var _a = req.body, context = _a.context, filename = _a.filename, newFilename = _a.newFilename;
    var resolvedSource = path_1.join(uploadPath, context, filename);
    var resolvedTarget = path_1.join(uploadPath, context, newFilename);
    fs_1["default"].renameSync(resolvedSource, resolvedTarget);
    res.json({ msg: "done" });
});
app
    .route("/file")
    .post(upload.array("file", 12), function (req, res) {
    res.json({ msg: "done" });
})
    .get(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var context, resolvedDir, files, _a, _b;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                context = req.query.context;
                resolvedDir = path_1.join(uploadPath, context);
                files = getFiles(resolvedDir).map(function (file) { return __awaiter(void 0, void 0, void 0, function () {
                    var absPath, filestats, image, imageMeta, jpeg, data, exif;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                absPath = path_1.join(resolvedDir, file.name);
                                filestats = fs_1["default"].statSync(absPath);
                                image = sharp_1["default"](absPath);
                                return [4 /*yield*/, image.metadata()];
                            case 1:
                                imageMeta = _a.sent();
                                jpeg = fs_1["default"].readFileSync(absPath);
                                data = jpeg.toString("binary");
                                exif = piexifjs_1["default"].load(data);
                                console.log({ exif: exif });
                                return [2 /*return*/, (__assign(__assign({}, file), { path: absPath.replace(uploadPath, ""), size: filestats.size, modified: filestats.mtime, width: imageMeta.width, height: imageMeta.height }))];
                        }
                    });
                }); });
                _b = (_a = res).json;
                _c = {};
                return [4 /*yield*/, Promise.all(files)];
            case 1:
                _b.apply(_a, [(_c.data = _d.sent(), _c)]);
                return [2 /*return*/];
        }
    });
}); });
app.use("/static", express_1["default"].static(uploadPath));
app.listen(PORT, function () {
    console.info("app running at port: " + PORT);
});
