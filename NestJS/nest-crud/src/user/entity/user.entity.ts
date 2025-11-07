import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Roles } from '../enum/user-roles.enum';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  streetAddress: string;

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.VISITOR,
  })
  roles: Roles;

  @Column()
  isActive: boolean;
}
