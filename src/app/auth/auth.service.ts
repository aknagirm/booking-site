/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuthenticated = true;
  private _userId = 'xyz';

  constructor(private router: Router) {}

  get userIsAuthenticated() {
    return this.userAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  login() {
    this.userAuthenticated = true;
  }
  logOut() {
    this.userAuthenticated = false;
    this.router.navigateByUrl('/auth');
  }
}
