import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginData } from '../model/loginmodel';
import { CustomerService } from '../services/service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email: string;
  pass: string;
  loginItem: ILoginData;
  access = false;

  constructor(private router: Router,
              private loginservice: CustomerService
             ) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    console.log(e);
    const username =  e.target[0].value;
    const password = e.target[1].value;
    console.log(username, password);
    if (username === 'admin' && password === 'admin') {
      // this.user.setUserLoggedIn();
      this.router.navigate(['dashbord']); }


  }

  setMail(id: string) {
    this.email = id;
  }

  setPass(pass: string) {
    this.pass = pass;
  }

  getRes() {
    console.log(this.email);
    console.log(this.pass);
    this.loginservice.getLoginDataByMail(this.email).subscribe(d => {
      console.log(d);
      this.access = true;
      if (d.password === this.pass) {
        this.router.navigate(['/topicList']);
      }

      this.loginItem = d;
    });
    console.log(this.loginItem);
    // if (this.loginItem !== null && this.loginItem.password === this.pass) {
    //   console.log("jhjjj")
    //   this.access = true;
    //   this.router.navigate(['/topicList']);
    // }
    // this.user.email = this.email;
    // this.user.password = this.pass;
  }

}
