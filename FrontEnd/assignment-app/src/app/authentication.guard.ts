import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isUserLoggedIn();
  }
  isUserLoggedIn() {
    let userToken: any = localStorage.getItem('userAccessToken')
      ? localStorage.getItem('userAccessToken')
      : false;
    //token might have null value

    if (userToken == 'true') {
      console.log('Access allowed', userToken);
      return true;
    } else {
      this.router.navigateByUrl('login');
      alert('Please Login To Continue ... ');
      console.log('aCCESS DENIED');
      return false;
    }
  }
}
