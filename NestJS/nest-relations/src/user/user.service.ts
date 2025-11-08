import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}

  findAll() {
    return this.userRepo.find();
  }

  findOne(userId: number) {
    return this.userRepo.findOneBy({ userId: userId });
  }

  createUser(userDto: CreateUserDTO) {
    const user = new UserEntity();
    user.userId = userDto.userId;
    user.username = userDto.username;
    user.password = userDto.password;
    user.role = userDto.role;
    user.isActive = userDto.isActive;

    return this.userRepo.save(user);
  }
}
