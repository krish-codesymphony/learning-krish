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

  @Column({ type: 'date' })
  dateJoined: Date;

  @OneToOne(() => UserEntity, (user) => user.employmentDetails, {
    cascade: true,
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
