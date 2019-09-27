import { Component, OnInit } from '@angular/core';
import { ILoginData } from '../model/loginmodel';
import { CustomerService } from '../services/service.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  loginItem = {
    email: '',
    name: '',
    password: '',
  };
  logindata: ILoginData;
  constructor(private loginService: CustomerService) { }

  ngOnInit() {
    // this.loginItem.email = '';
    // this.loginItem.name = '';
    // this.loginItem.password = '';
  }

  postItem(mail: string, name: string, pass: string) {
    console.log(mail);
    console.log(name);
    console.log(pass);
    this.loginItem.email = mail;
    this.loginItem.name = name;
    this.loginItem.password = pass;
    this.logindata = this.loginItem;
    console.log(this.logindata);
    this.loginService.postLoginDataByMail(this.logindata).subscribe(d => console.log(d));
  }

}
