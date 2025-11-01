import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

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
  ];

  findAll(): User[] {
    return this.users;
  }

  createUser(user: User) {
    return this.users.push(user);
  }
}
