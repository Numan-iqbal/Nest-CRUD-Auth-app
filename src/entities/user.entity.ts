import { IsEmail, IsNotEmpty } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Unique,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { BlogEntity } from './blog.entity';
import { RoleEntity } from './role.entity';

@Entity()
export class UserEntiy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['email'])
  @IsEmail({}, { message: 'Incorrect email' })
  @IsNotEmpty({ message: 'The email is required' })
  email: string;

  @Column()
  passowrd: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToMany(() => BlogEntity, (blog) => blog.user)
  blogs: BlogEntity;

  @ManyToMany(() => RoleEntity)
  @JoinTable()
  roles: RoleEntity[];
}
