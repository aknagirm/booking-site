import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuthenticated = false;

  constructor(private router: Router) {}

  get userIsAuthenticated() {
    return this.userAuthenticated;
  }

  login() {
    this.userAuthenticated = true;
    this.router.navigateByUrl('/places/discover');
  }
  logOut() {
    this.userAuthenticated = false;
    this.router.navigateByUrl('/auth');
  }
}