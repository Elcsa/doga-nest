import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  accnumber: string;
  @Column()
  balanc: number;
}
