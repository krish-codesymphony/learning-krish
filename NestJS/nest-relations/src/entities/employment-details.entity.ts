import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'employmentDetails' })
export class EmploymentDetailsEntity {
  @PrimaryGeneratedColumn('uuid')
  empId: string;

  @Column({
    type: 'enum',
    enum: [
      'Management',
      'Sales',
      'Reception',
      'Accounting',
      'Customer Service',
      'Human Resources',
    ],
  })
  department: string;

  @Column()
  salary: number;

  @Column()
  dateJoined: Date;

  @OneToOne(() => UserEntity, (user) => user.employmentDetails)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
