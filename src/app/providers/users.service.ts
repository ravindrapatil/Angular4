import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  private isUserLoggedIn;
  public userName;

  constructor() { 
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(email) {
    this.isUserLoggedIn = true;
    this.userName = email;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

}
