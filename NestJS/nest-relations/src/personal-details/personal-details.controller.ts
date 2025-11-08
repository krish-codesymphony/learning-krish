import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersonalDetailsService } from './personal-details.service';
import { CreatePersonalDetailsDTO } from 'src/dto/create-personalDetails.dto';

@Controller('personal-details')
export class PersonalDetailsController {
  constructor(private readonly perDetailsService: PersonalDetailsService) {}

  @Get()
  findAll() {
    return this.perDetailsService.findAll();
  }

  @Post()
  createPerDetails(@Body() newPerDetails: CreatePersonalDetailsDTO) {
    return this.perDetailsService.createPersonalDetails(newPerDetails);
  }
}
