import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  constructor() {}

  validateRegister(user) {
    if (
      user.firstName == undefined ||
      user.username == undefined ||
      user.firstName == undefined ||
      user.password == undefined ||
      user.email == undefined
    ) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    let emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailFormat.test(email);
  }

  validateLogin(user) {
    if (user.username === undefined || user.password === undefined) {
      return false;
    } else {
      return true;
    }
  }
}
