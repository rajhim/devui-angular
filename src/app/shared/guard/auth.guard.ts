import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly router: Router) { }

  canActivate(): boolean {
    if (this.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
    }
    return false;
  }

  isUserLoggedIn(): boolean {
    return sessionStorage.getItem('token') !== null;
  }
}
