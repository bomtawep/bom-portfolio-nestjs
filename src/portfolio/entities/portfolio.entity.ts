import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('portfolio')
export class Portfolio {
  @PrimaryGeneratedColumn()
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
    name: 'status',
  })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}