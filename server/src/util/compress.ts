import sharp, { Sharp } from "sharp";
import { existsSync } from "fs";

export const CompressImage = async (path: string) => {
  console.log({ path });
  if (!existsSync(path)) {
    throw new Error("Path does not exist");
  }
  try {
    const buffer = await sharp(path)
      .jpeg({ progressive: true, force: false, quality: 80 })
      .png({ progressive: true, force: false, quality: 80 })
      .webp({ force: false, quality: 80 })
      .toBuffer();
      return sharp(buffer).toFile(path);
  } catch (e) {
    console.error(e);
  }
};
