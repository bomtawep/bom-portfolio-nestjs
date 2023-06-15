import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('portfolio')
export class Portfolio {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  firstname: string;

  @Column({
    nullable: false,
    default: '',
  })
  lastname: string;

  @Column({
    nullable: false,
    default: '',
  })
  gender: string;

  @Column({
    nullable: false,
    default: '',
    name: 'email',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  created: Date;

  @Column({
    nullable: false,
    default: '',
  })
  updated: Date;
}