import { Body, Controller, Get } from '@nestjs/common';
import { PersonalDetailsService } from './personal-details.service';

@Controller('personal-details')
export class PersonalDetailsController {
  constructor(private readonly perDetailsService: PersonalDetailsService) {}

  @Get()
  findAll() {
    return this.perDetailsService.findAll();
  }
}
