"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageTag = void 0;
const typeorm_1 = require("typeorm");
let ImageTag = class ImageTag extends typeorm_1.BaseEntity {
    toLowerCase() {
        this.name = this.name.toLowerCase();
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ImageTag.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true, type: "varchar", length: 150 }),
    __metadata("design:type", String)
], ImageTag.prototype, "name", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImageTag.prototype, "toLowerCase", null);
ImageTag = __decorate([
    typeorm_1.Entity()
], ImageTag);
exports.ImageTag = ImageTag;
