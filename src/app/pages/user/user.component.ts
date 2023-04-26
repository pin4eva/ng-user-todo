import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
    this.setCurrentClasses();
  }

  addUser() {
    this.user.registeredAt = new Date();
    this.user.balance = Math.floor(Math.random() * 9000 + 1000);
    this.userService.addUser(this.user);
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
