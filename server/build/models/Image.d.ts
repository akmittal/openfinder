import { BaseEntity } from "typeorm";
import { ImageTag } from "./ImageTag";
export declare class Image extends BaseEntity {
    id: number;
    name: string;
    path: string;
    updateDate: Date;
    alt: string;
    tags: ImageTag[];
    toLowerCase(): void;
}
