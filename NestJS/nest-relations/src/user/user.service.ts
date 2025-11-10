import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { EmploymentDetailsService } from 'src/employment-details/employment-details.service';
import { UserEntity } from 'src/entities/user.entity';
import { PersonalDetailsService } from 'src/personal-details/personal-details.service';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    private perDetailsService: PersonalDetailsService,
    private empDetailsService: EmploymentDetailsService,
  ) {}

  findAll() {
    return this.userRepo.find();
  }

  findOne(userId: string) {
    return this.userRepo.findOneBy({ userId: userId });
  }

  async getAll(userId: string) {
    return await this.userRepo.findOne({
      where: { userId: userId },
      relations: {
        personalDetails: true,
        employmentDetails: true,
      },
    });
  }

  async createUser(userDto: CreateUserDTO) {
    const createdUser = await this.userRepo.save(userDto.user);

    await this.perDetailsService.create(userDto.personalDetails, createdUser);

    await this.empDetailsService.create(userDto.employmentDetails, createdUser);

    return 'Saved records...';
  }
}
