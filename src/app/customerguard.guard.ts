import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerguardGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //       return true;
  // }

  constructor(private sec: AuthServiceService,
              private router: Router) {
              }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const loogedIn = this.sec.getUserLoggedIn();
      if (!loogedIn) {
        // this.router.navigate(['/login']);
      }
      this.sec.setUserLoggedIn();
      return loogedIn;
    //   if (localStorage.getItem('currentUser')) {
    //     // logged in so return true
    //     return true;
    //   }

    // // not logged in so redirect to login page with the return url
    //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    //   return false;  }
}
}
