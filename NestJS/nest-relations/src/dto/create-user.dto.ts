import { CreateEmploymentDetailsDTO } from './create-employmentDetails.dto';
import { CreatePersonalDetailsDTO } from './create-personalDetails.dto';

export class CreateUserDTO {
  // userId: number;
  user: {
    username: string;
    password: string;
    role: string;
    isActive: boolean;
  };

  personalDetails: CreatePersonalDetailsDTO;
  employmentDetails: CreateEmploymentDetailsDTO;
}
