import { EmploymentDetailsDTO } from './employmentDetails.dto';
import { PersonalDetailsDTO } from './personalDetails.dto';
import { UserDTO } from './user.dto';

export class CreateUserDTO {
  user: UserDTO;
  personalDetails: PersonalDetailsDTO;
  employmentDetails: EmploymentDetailsDTO;
}
