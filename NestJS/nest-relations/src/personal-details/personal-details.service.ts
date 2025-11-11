import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonalDetailsDTO } from 'src/dto/personalDetails.dto';
import { UpdateUserDTO } from 'src/dto/update-user.dto';
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

  create(perDetailsDto: PersonalDetailsDTO, user: UserEntity) {
    return this.perDetailsRepo.save({ ...perDetailsDto, user: user });
  }

  async update(user: UserEntity, updateDto: UpdateUserDTO) {
    return await this.perDetailsRepo.update(
      { user: user },
      { ...updateDto.personalDetails, user: user },
    );
  }
}
