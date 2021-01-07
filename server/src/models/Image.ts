import {
    BaseEntity,
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { ImageTag } from "./ImageTag";

  
  @Entity()
  export class Image extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
  
    @Column({ type: "varchar", length: 150 })
    public name: string;
    @Column({ unique: true, type: "varchar", length: 1000 })
    public path: string;
    @Column()
    public updateDate: Date;
    @Column({ type: "varchar", length: 200 })
    public alt: string;
    @ManyToMany((type: any) => ImageTag)
    @JoinTable()
    public tags: ImageTag[];
    @BeforeInsert()
    @BeforeUpdate()
    public toLowerCase(): void {
      this.updateDate = new Date();
    }
  }
  