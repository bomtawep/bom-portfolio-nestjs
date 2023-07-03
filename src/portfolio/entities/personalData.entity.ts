import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToMany,
} from 'typeorm';
import { Skill } from './skill.entity';

@Entity('personal')
export class PersonalData {
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
  nickname: string;

  @Column({
    nullable: false,
    default: '',
  })
  gender: string;

  @Column({
    nullable: false,
    default: '',
  })
  phone_number: string;

  @Column({
    nullable: false,
    default: '',
    name: 'email',
  })
  email: string;

  @Column({
    nullable: true,
    default: '',
  })
  line_id: string;

  @Column({
    nullable: false,
    default: '',
  })
  address: string;

  @Column({
    nullable: true,
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

  @ManyToMany((type) => Skill, (skill) => skill.personalDatas)
  skills: Skill[]
}