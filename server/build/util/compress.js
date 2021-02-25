"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressImage = void 0;
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = require("fs");
const CompressImage = async (path) => {
    console.log({ path });
    if (!fs_1.existsSync(path)) {
        throw new Error("Path does not exist");
    }
    try {
        const buffer = await sharp_1.default(path)
            .jpeg({ progressive: true, force: false, quality: 80 })
            .png({ progressive: true, force: false, quality: 80 })
            .webp({ force: false, quality: 80 })
            .toBuffer();
        return sharp_1.default(buffer).toFile(path);
    }
    catch (e) {
        console.error(e);
    }
};
exports.CompressImage = CompressImage;
