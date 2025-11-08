import { Test, TestingModule } from '@nestjs/testing';
import { PersonalDetailsController } from './personal-details.controller';
import { PersonalDetailsService } from './personal-details.service';

describe('PersonalDetailsController', () => {
  let controller: PersonalDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalDetailsController],
      providers: [PersonalDetailsService],
    }).compile();

    controller = module.get<PersonalDetailsController>(PersonalDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
