import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];
  data: Observable<any> | null = null;
  constructor() {
    this.users = users;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}

const users: User[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    balance: 100,
    registeredAt: new Date('01/02/2018'),
    hide: true,
  },
  {
    firstName: 'Kelvin',
    lastName: 'Johnson',
    isActive: true,
    balance: 100,
    registeredAt: new Date('01/02/2018'),
    hide: true,
    email: 'kelvin@gmail.com',
  },
  {
    firstName: 'Karen',
    lastName: 'Williams',
    email: 'karen@gmail.com',
    balance: 100,
    registeredAt: new Date('01/02/2018'),
    hide: true,
  },
];
