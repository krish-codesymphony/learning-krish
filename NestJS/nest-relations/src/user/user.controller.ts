import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { UpdateUserDTO } from 'src/dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':userId')
  getDetails(@Param('userId') userId: string) {
    return this.userService.getDetails(userId);
  }

  @Post()
  createUser(@Body() newUser: CreateUserDTO) {
    return this.userService.createUser(newUser);
  }

  @UseGuards(AuthGuard)
  @Put(':userId')
  updateUser(
    @Param('userId') userId: string,
    @Body() updatedUser: UpdateUserDTO,
  ) {
    return this.userService.updateUser(userId, updatedUser);
  }
}
