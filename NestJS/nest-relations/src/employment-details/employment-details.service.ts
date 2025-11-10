import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmploymentDetailsDTO } from 'src/dto/create-employmentDetails.dto';
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

  create(empDetailsDto: CreateEmploymentDetailsDTO, user: UserEntity) {
    return this.empDetailsRepo.save({ ...empDetailsDto, user: user });
  }
}
