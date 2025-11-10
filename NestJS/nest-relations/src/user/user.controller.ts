import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from 'src/dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':userId')
  getAll(@Param('userId') userId: string) {
    return this.userService.getAll(userId);
  }

  @Post()
  create(@Body() newUser: CreateUserDTO) {
    return this.userService.createUser(newUser);
  }
}
