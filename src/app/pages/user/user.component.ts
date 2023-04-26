import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  showExtended = true;
  enableAdd = true;
  currentClasses = {};
  showUserForm = false;
  user: User = initialUser;
  // @ViewChild('userForm') userForm: ;

  ngOnInit(): void {
    this.users = users;
    this.setCurrentClasses();
  }

  addUser() {
    this.user.registeredAt = new Date();
    this.user.balance = Math.floor(Math.random() * 9000 + 1000);
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
    };
    this.showUserForm = !this.showUserForm;
  }

  onSubmit({ form }: NgForm) {
    const user = form.value as User;
    user.registeredAt = new Date();
    user.balance = Math.floor(Math.random() * 9000 + 1000);

    this.users.unshift(user);
    form.reset();
    this.showUserForm = false;
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
    };
  }
  toggleHide(user: User) {
    user.hide = !user.hide;
  }
}

const initialUser: User = {
  firstName: '',
  lastName: '',
  email: '',
};
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
