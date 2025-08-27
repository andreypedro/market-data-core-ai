import { Injectable } from '@nestjs/common';

export interface IUser {
  id: number;
  name: string;
  role: 'INTER' | 'ENGINEER' | 'ADMIN';
}

@Injectable()
export class UsersService {
  private users: IUser[] = [
    { id: 1, name: 'John Doe', role: 'INTER' },
    { id: 2, name: 'Jane Smith', role: 'ENGINEER' },
    { id: 3, name: 'Alice Johnson', role: 'ADMIN' },
  ];

  findAll(role?: 'INTER' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  findAllInterns() {
    return this.users.filter((user) => user.role === 'INTER');
  }

  findAllEngineers() {
    return this.users.filter((user) => user.role === 'ENGINEER');
  }

  findAllAdmins() {
    return this.users.filter((user) => user.role === 'ADMIN');
  }

  create(user: { name: string; role: 'INTER' | 'ENGINEER' | 'ADMIN' }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newId = usersByHighestId.length > 0 ? usersByHighestId[0].id + 1 : 1;
    this.users.push({ id: newId, ...user });
    return this.users.find((u) => u.id === newId);
  }

  update(
    id: number,
    updatedUser: { name?: string; role?: 'INTER' | 'ENGINEER' | 'ADMIN' },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }
}
