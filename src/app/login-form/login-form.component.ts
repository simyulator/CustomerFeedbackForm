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

  email = '';
  imgPath = 'assets/image/redditimage.png';
  pass = '';
  pass1 = '';
  loginItem: ILoginData;
  flag = 0;
  access = false;

  constructor(private router: Router,
              private loginservice: CustomerService
             ) { }

  ngOnInit() {
    localStorage.clear();
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
    // console.log(this.email);
    // console.log(this.pass);
    this.loginservice.getLoginDataByMail(this.email).subscribe(d => {
      console.log(d);
      this.loginItem = d[0];
      // console.log(this.loginItem.email);
      if (d[0] === undefined) {
        alert('Enter Correct Username or Password');
      } else {
        console.log(d[0]);
        this.access = true;
        console.log(d[0].password + ' ' + this.pass1);
        if (this.loginItem.password === this.pass1) {
          console.log('In Pass');
          localStorage.setItem('user', this.email);
          this.flag = 1;
          this.router.navigate(['/topicList']);
        } else {
          alert('Enter Correct Username or Password');
        }
      }


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
  getDisableStatus() {
    if (this.email.includes('@') && this.pass1 !== '') {
      return false;
    }
    return true;
  }

}
