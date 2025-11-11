import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmploymentDetailsDTO } from 'src/dto/employmentDetails.dto';
import { UpdateUserDTO } from 'src/dto/update-user.dto';
import { EmploymentDetailsEntity } from 'src/entities/employment-details.entity';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmploymentDetailsService {
  constructor(
    @InjectRepository(EmploymentDetailsEntity)
    private empDetailsRepo: Repository<EmploymentDetailsEntity>,
  ) {}

  findAll() {
    return this.empDetailsRepo.find();
  }

  create(empDetailsDto: EmploymentDetailsDTO, user: UserEntity) {
    return this.empDetailsRepo.save({ ...empDetailsDto, user: user });
  }

  async update(user: UserEntity, updateDto: UpdateUserDTO) {
    return await this.empDetailsRepo.update(
      { user: user },
      { ...updateDto.employmentDetails, user: user },
    );
  }
}
