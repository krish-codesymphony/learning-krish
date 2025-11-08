import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'employmentDetails' })
export class EmploymentDetailsEntity {
  @PrimaryColumn()
  empId: number;

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

  @OneToOne(() => UserEntity, (user) => user.employmentDetails, { eager: true })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
