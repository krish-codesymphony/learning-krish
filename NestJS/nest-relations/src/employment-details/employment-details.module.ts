import { Module } from '@nestjs/common';
import { EmploymentDetailsService } from './employment-details.service';
import { EmploymentDetailsController } from './employment-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmploymentDetailsEntity } from 'src/entities/employment-details.entity';
import { UserEntity } from 'src/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmploymentDetailsEntity, UserEntity])],
  controllers: [EmploymentDetailsController],
  providers: [EmploymentDetailsService, UserService],
})
export class EmploymentDetailsModule {}
