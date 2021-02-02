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
exports.Image = void 0;
const typeorm_1 = require("typeorm");
const ImageTag_1 = require("./ImageTag");
let Image = class Image extends typeorm_1.BaseEntity {
    toLowerCase() {
        this.updateDate = new Date();
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Image.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 150 }),
    __metadata("design:type", String)
], Image.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ unique: true, type: "varchar", length: 1000 }),
    __metadata("design:type", String)
], Image.prototype, "path", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Image.prototype, "updateDate", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 200 }),
    __metadata("design:type", String)
], Image.prototype, "alt", void 0);
__decorate([
    typeorm_1.ManyToMany((type) => ImageTag_1.ImageTag),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Image.prototype, "tags", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Image.prototype, "toLowerCase", null);
Image = __decorate([
    typeorm_1.Entity()
], Image);
exports.Image = Image;
