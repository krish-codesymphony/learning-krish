import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmploymentDetailsService } from './employment-details.service';
import { CreateEmploymentDetailsDTO } from 'src/dto/create-employmentDetails.dto';

@Controller('employment-details')
export class EmploymentDetailsController {
  constructor(private readonly empDetailsService: EmploymentDetailsService) {}

  @Get()
  findAll() {
    return this.empDetailsService.findAll();
  }

  @Post()
  createEmpDetails(@Body() newEmpDetails: CreateEmploymentDetailsDTO) {
    return this.empDetailsService.createEmpDetails(newEmpDetails);
  }
}
