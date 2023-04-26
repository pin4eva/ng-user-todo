import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localNG from '@angular/common/locales/en-NG';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './pages/todo/todo.component';
import { UserComponent } from './pages/user/user.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoItemComponent } from './pages/todo/todo-item.component';

registerLocaleData(localNG, 'ng');
@NgModule({
  declarations: [AppComponent, TodoComponent, TodoItemComponent, UserComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
