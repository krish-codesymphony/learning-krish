import {
  Body,
  Controller,
  Delete,
  Get,
  ImATeapotException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/user.CreateUser.dto';
import { UpdateUserDTO } from './dto/user.UpdateUser.dto';
import { CustomHttpExceptionFilter } from '../http-exception.filter';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDTO) {
    return this.userService.createUser(createUserDto);
  }

  @Put('/:id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedUser: UpdateUserDTO,
  ) {
    return this.userService.updateUser(id, updatedUser);
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }

  @Post('/except')
  @UseFilters(new CustomHttpExceptionFilter())
  create() {
    throw new ImATeapotException();
  }
}
