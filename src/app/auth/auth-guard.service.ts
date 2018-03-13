import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, private router: Router) { }

  canActivate(): boolean {

    if(!this.auth.isAuthenticated()) {
      console.log('not authenticated!');
      this.router.navigate(['auth'])
      return false;
    }    
    return true;
  }
}
