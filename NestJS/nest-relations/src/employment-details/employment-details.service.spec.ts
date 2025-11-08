import { Test, TestingModule } from '@nestjs/testing';
import { EmploymentDetailsService } from './employment-details.service';

describe('EmploymentDetailsService', () => {
  let service: EmploymentDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmploymentDetailsService],
    }).compile();

    service = module.get<EmploymentDetailsService>(EmploymentDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
