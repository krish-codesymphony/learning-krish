import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'personalDetails' })
export class PersonalDetailsEntity {
  @PrimaryGeneratedColumn('uuid')
  personalId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({
    type: 'enum',
    enum: ['Male', 'Female'],
    default: 'Male',
  })
  gender: string;

  @Column()
  dob: Date;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @OneToOne(() => UserEntity, (user) => user.personalDetails)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
