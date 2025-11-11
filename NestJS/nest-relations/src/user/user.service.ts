import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { UpdateUserDTO } from 'src/dto/update-user.dto';
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

  async getDetails(userId: string) {
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

  async updateUser(userId: string, updatedDto: UpdateUserDTO) {
    if (updatedDto.user)
      await this.userRepo.update({ userId: userId }, updatedDto.user);

    const currentUser = await this.findOne(userId);

    if (currentUser && updatedDto.personalDetails)
      await this.perDetailsService.update(currentUser, updatedDto);
    else return { updatedDto, message: 'No user found for other updates...' };

    if (currentUser && updatedDto.employmentDetails)
      await this.empDetailsService.update(currentUser, updatedDto);
    else return { updatedDto, message: 'No user found for other updates...' };

    return { updatedDto, message: 'User Updated...!' };
  }
}
