import { Injectable } from '@nestjs/common';
import { UserModel, UserPrivateModel } from './models/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UserEntity } from './models/user.entity';

@Injectable()
export class UsersService {
  private users: UserEntity[] = [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: '123456',
    },
    {
      id: '124',
      name: 'Lena',
      email: 'lena@gmail.com',
      password: '123456',
    },
    {
      id: '125',
      name: 'Gena',
      email: 'gena@gmail.com',
      password: '123456',
    },
    {
      id: '126',
      name: 'Lafa',
      email: 'lafa@gmail.com',
      password: '123456',
    },
  ];

  createUser(user: CreateUserInput): UserModel {
    const newUser: UserEntity = {
      id: new Date().getTime().toString(),
      ...user,
    };

    this.users.push(newUser);

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };
  }

  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): UserPrivateModel[] {
    return this.users;
  }
}
