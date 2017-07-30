import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsersService } from "app/providers/users.service";

@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(private user: UsersService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        //this.router.navigate(['dashboard']);
        return this.user.getUserLoggedIn();
    }
}
