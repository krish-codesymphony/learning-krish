import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { UpdateUserDTO } from 'src/dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':userId')
  getDetails(@Param('userId') userId: string) {
    return this.userService.getDetails(userId);
  }

  @Post()
  createUser(@Body() newUser: CreateUserDTO) {
    return this.userService.createUser(newUser);
  }

  @Put(':userId')
  updateUser(
    @Param('userId') userId: string,
    @Body() updatedUser: UpdateUserDTO,
  ) {
    return this.userService.updateUser(userId, updatedUser);
  }
}
