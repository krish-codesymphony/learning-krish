import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'personalDetails' })
export class PersonalDetailsEntity {
  @PrimaryColumn()
  personalId: number;

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

  @OneToOne(() => UserEntity, (user) => user.personalDetails, { eager: true })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
