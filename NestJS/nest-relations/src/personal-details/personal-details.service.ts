import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonalDetailsDTO } from 'src/dto/create-personalDetails.dto';
import { PersonalDetailsEntity } from 'src/entities/personal-details.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class PersonalDetailsService {
  constructor(
    @InjectRepository(PersonalDetailsEntity)
    private perDetailsRepo: Repository<PersonalDetailsEntity>,
    private userService: UserService,
  ) {}

  findAll() {
    return this.perDetailsRepo.find();
  }

  async createPersonalDetails(perDetailsDto: CreatePersonalDetailsDTO) {
    const user = await this.userService.findOne(perDetailsDto.user);
    if (!user) return 'No User found...!!';

    const userPerDetails = new PersonalDetailsEntity();
    userPerDetails.personalId = perDetailsDto.personalId;
    userPerDetails.user = user;
    userPerDetails.firstName = perDetailsDto.firstName;
    userPerDetails.lastName = perDetailsDto.lastName;
    userPerDetails.email = perDetailsDto.email;
    userPerDetails.phone = perDetailsDto.phone;
    userPerDetails.gender = perDetailsDto.gender;
    userPerDetails.dob = perDetailsDto.dob;
    userPerDetails.address = perDetailsDto.address;
    userPerDetails.city = perDetailsDto.city;
    userPerDetails.state = perDetailsDto.state;
    userPerDetails.country = perDetailsDto.country;

    return this.perDetailsRepo.insert(userPerDetails);
  }
}
