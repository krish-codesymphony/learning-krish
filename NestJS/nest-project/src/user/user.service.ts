import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/user.CreateUser.dto';
import { UpdateUserDTO } from './dto/user.UpdateUser.dto';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      firstName: 'Miltie',
      lastName: 'Clapson',
      email: 'mclapson0@blinklist.com',
      streetAddress: '8906 Knutson Place',
      roles: 'admin',
      isActive: true,
    },
    {
      id: 2,
      firstName: 'Ari',
      lastName: 'MacAndie',
      email: 'amacandie1@pbs.org',
      streetAddress: '1 Muir Point',
      roles: 'client',
      isActive: true,
    },
    {
      id: 3,
      firstName: 'Veriee',
      lastName: 'McLennan',
      email: 'vmclennan2@bbc.co.uk',
      streetAddress: '9 Amoth Park',
      roles: 'user',
      isActive: true,
    },
    {
      id: 4,
      firstName: 'Gardie',
      lastName: 'Lipp',
      email: 'glipp3@over-blog.com',
      streetAddress: '8791 Golf View Alley',
      roles: 'client',
      isActive: false,
    },
    {
      id: 5,
      firstName: 'Rosalinde',
      lastName: 'Pietruszka',
      email: 'rpietruszka4@cloudflare.com',
      streetAddress: '39824 Schurz Way',
      roles: 'client',
      isActive: false,
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  createUser(newUser: CreateUserDTO) {
    const user: User = {
      id: this.users.length,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      streetAddress: newUser.streetAddress,
      roles: newUser.roles,
      isActive: true,
    };
    return this.users.push(user);
  }

  updateUser(id: number, updatedUser: UpdateUserDTO) {
    this.users.map((curr) => {
      if (curr.id == id) {
        curr.firstName = updatedUser.firstName;
        curr.lastName = updatedUser.lastName;
        curr.email = updatedUser.email;
        curr.streetAddress = updatedUser.streetAddress;
        curr.roles = updatedUser.roles;
        curr.isActive = updatedUser.isActive;
      }
    });
    console.log(this.users);
    return this.users;
  }

  deleteUser(id: number) {
    return this.users.filter((curr) => curr.id != id);
  }
}
