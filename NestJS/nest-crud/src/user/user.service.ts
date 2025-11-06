import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/user.create-user.dto';
import { UpdateUserDTO } from './dto/user.update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}

  getUser() {
    return this.userRepo.find();
  }

  createUser(newUser: CreateUserDTO) {
    const user = this.userRepo.create({ ...newUser, isActive: 'true' });
    return this.userRepo.save(user);
  }

  updateUser(id: number, updateUserDetails: UpdateUserDTO) {
    return this.userRepo.update({ id }, { ...updateUserDetails });
  }

  deleteUser(id: number) {
    return this.userRepo.delete(id);
  }
}
