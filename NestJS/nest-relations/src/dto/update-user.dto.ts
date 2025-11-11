import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './create-user.dto';
import { UserDTO } from './user.dto';
import { PersonalDetailsDTO } from './personalDetails.dto';
import { EmploymentDetailsDTO } from './employmentDetails.dto';
export class UpdateUserDTO extends PartialType(CreateUserDTO) {
  user: UserDTO;
  personalDetails: PersonalDetailsDTO;
  employmentDetails: EmploymentDetailsDTO;
}
