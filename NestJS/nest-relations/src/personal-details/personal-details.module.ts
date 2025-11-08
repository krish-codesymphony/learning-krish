import { Module } from '@nestjs/common';
import { PersonalDetailsService } from './personal-details.service';
import { PersonalDetailsController } from './personal-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalDetailsEntity } from 'src/entities/personal-details.entity';
import { UserEntity } from 'src/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalDetailsEntity, UserEntity])],
  controllers: [PersonalDetailsController],
  providers: [PersonalDetailsService, UserService],
})
export class PersonalDetailsModule {}
