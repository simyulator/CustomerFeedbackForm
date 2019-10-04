import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate {

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  userLoggedIn = false;
  // tslint:disable-next-line: variable-name
  constructor(private _router: Router) {
      this.userLoggedIn = false;
   }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     console.log(localStorage.getItem('user'));
     if (localStorage.getItem('user')) {
return true;
} else {
  alert('Authentication Required');
  this._router.navigate(['/login']);
  return false;
}
   }

  //  setUserLoggedIn() {
  //     this.userLoggedIn = true;
  //  }
  //  getUserLoggedIn() {
  //    if(localStorage.getItem('user')){
  //      return true;
  //    }
  //   return this.userLoggedIn;
  // }
}
