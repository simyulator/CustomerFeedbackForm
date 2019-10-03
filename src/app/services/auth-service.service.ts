import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  userLoggedIn = false;
  constructor() {
      this.userLoggedIn = false;
   }

   setUserLoggedIn() {
      this.userLoggedIn = true;
   }
   getUserLoggedIn() {
    return this.userLoggedIn;
  }
}
