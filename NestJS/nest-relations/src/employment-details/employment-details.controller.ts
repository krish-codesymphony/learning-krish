import { Body, Controller, Get } from '@nestjs/common';
import { EmploymentDetailsService } from './employment-details.service';

@Controller('employment-details')
export class EmploymentDetailsController {
  constructor(private readonly empDetailsService: EmploymentDetailsService) {}

  @Get()
  findAll() {
    return this.empDetailsService.findAll();
  }
}
