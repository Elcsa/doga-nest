import { Column, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fullname: string;
  @Column()
  busisnes: boolean;
  
}
