import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { PersonalDetailsEntity } from './personal-details.entity';
import { EmploymentDetailsEntity } from './employment-details.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryColumn()
  userId: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: [
      'Regional Manager',
      'HR Representative',
      'Assistant to the Regional Manager',
      'Accountant',
      'Office Administrator',
      'Salesmen',
      'Customer Service',
      'Visitor',
    ],
    default: 'Visitor',
  })
  role: string;

  @Column()
  isActive: boolean;

  @OneToOne(
    () => PersonalDetailsEntity,
    (personalDetails) => personalDetails.user,
  )
  personalDetails: PersonalDetailsEntity;

  @OneToOne(
    () => EmploymentDetailsEntity,
    (employmentDetails) => employmentDetails.user,
  )
  employmentDetails: EmploymentDetailsEntity;
}
