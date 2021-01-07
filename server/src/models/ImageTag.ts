import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class ImageTag extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true, type: "varchar", length: 150 })
  public name: string;
  @BeforeInsert()
  @BeforeUpdate()
  public toLowerCase(): void {
    this.name = this.name.toLowerCase();
  }
}
