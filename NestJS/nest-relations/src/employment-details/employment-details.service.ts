import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmploymentDetailsDTO } from 'src/dto/create-employmentDetails.dto';
import { EmploymentDetailsEntity } from 'src/entities/employment-details.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class EmploymentDetailsService {
  constructor(
    @InjectRepository(EmploymentDetailsEntity)
    private empDetailsRepo: Repository<EmploymentDetailsEntity>,
    private userService: UserService,
  ) {}

  findAll() {
    return this.empDetailsRepo.find();
  }

  async createEmpDetails(empDetailsDto: CreateEmploymentDetailsDTO) {
    const user = await this.userService.findOne(empDetailsDto.user);
    if (!user) return 'No User Found...!!';

    const userEmpDetails = new EmploymentDetailsEntity();
    userEmpDetails.empId = empDetailsDto.empId;
    userEmpDetails.user = user;
    userEmpDetails.department = empDetailsDto.department;
    userEmpDetails.salary = empDetailsDto.salary;
    userEmpDetails.dateJoined = empDetailsDto.dateJoined;

    return this.empDetailsRepo.insert(userEmpDetails);
  }
}
