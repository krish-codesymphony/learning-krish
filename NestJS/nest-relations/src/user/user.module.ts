import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { PersonalDetailsEntity } from 'src/entities/personal-details.entity';
import { EmploymentDetailsEntity } from 'src/entities/employment-details.entity';
import { PersonalDetailsService } from 'src/personal-details/personal-details.service';
import { EmploymentDetailsService } from 'src/employment-details/employment-details.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      PersonalDetailsEntity,
      EmploymentDetailsEntity,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, PersonalDetailsService, EmploymentDetailsService],
})
export class UserModule {}
