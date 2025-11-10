import { Module } from '@nestjs/common';
import { PersonalDetailsService } from './personal-details.service';
import { PersonalDetailsController } from './personal-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalDetailsEntity } from 'src/entities/personal-details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalDetailsEntity])],
  controllers: [PersonalDetailsController],
  providers: [PersonalDetailsService],
})
export class PersonalDetailsModule {}
