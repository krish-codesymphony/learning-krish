import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonalDetailsDTO } from 'src/dto/create-personalDetails.dto';
import { PersonalDetailsEntity } from 'src/entities/personal-details.entity';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonalDetailsService {
  constructor(
    @InjectRepository(PersonalDetailsEntity)
    private perDetailsRepo: Repository<PersonalDetailsEntity>,
  ) {}

  findAll() {
    return this.perDetailsRepo.find();
  }

  create(perDetailsDto: CreatePersonalDetailsDTO, user: UserEntity) {
    return this.perDetailsRepo.save({ ...perDetailsDto, user: user });
  }
}
