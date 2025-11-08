import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from 'src/dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() newUser: CreateUserDTO) {
    return this.userService.createUser(newUser);
  }
}
