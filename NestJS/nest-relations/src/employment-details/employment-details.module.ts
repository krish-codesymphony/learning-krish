import { Module } from '@nestjs/common';
import { EmploymentDetailsService } from './employment-details.service';
import { EmploymentDetailsController } from './employment-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmploymentDetailsEntity } from 'src/entities/employment-details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmploymentDetailsEntity])],
  controllers: [EmploymentDetailsController],
  providers: [EmploymentDetailsService],
})
export class EmploymentDetailsModule {}
