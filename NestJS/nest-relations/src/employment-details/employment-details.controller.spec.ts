import { Test, TestingModule } from '@nestjs/testing';
import { EmploymentDetailsController } from './employment-details.controller';
import { EmploymentDetailsService } from './employment-details.service';

describe('EmploymentDetailsController', () => {
  let controller: EmploymentDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmploymentDetailsController],
      providers: [EmploymentDetailsService],
    }).compile();

    controller = module.get<EmploymentDetailsController>(EmploymentDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
