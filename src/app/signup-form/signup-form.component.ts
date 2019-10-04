import { Component, OnInit, ElementRef, AfterViewInit, ViewChildren } from '@angular/core';
import { ILoginData } from '../model/loginmodel';
import { CustomerService } from '../services/service.service';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { NumberValidators } from '../validator/number.validator';
import { Observable, fromEvent, Subscription, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GenericValidator } from '../validator/generic-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  mail1: string;
  username1: string;
  pass1: string;
  loginItem = {
    email: '',
    name: '',
    password: '',
  };
  logindata: ILoginData;
  logindata1: ILoginData[] = [];
  LoginForm: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;


  private validationMessages: { [key: string]: { [key: string]: string } };
  backimg = 'assets/image/logo.png';
  constructor(private loginService: CustomerService,
              private fb: FormBuilder, private router: Router
              ) {

                this.validationMessages = {
                  eMail: {
                  required: 'e-Mail is required.',

                  },
                  userName: {
                  required: 'UserName is required.'
                  },
                  password: {
                    required: 'Password is required.',
                    minlength: 'Password must be at least three characters.',
                    maxlength: 'Password cannot exceed 12 characters.'
                  }
                  };

                this.genericValidator = new GenericValidator(this.validationMessages);

               }

  ngOnInit() {
    // this.loginItem.email = '';
    // this.loginItem.name = '';
    // this.loginItem.password = '';

    this.LoginForm = this.fb.group({
      email: ['', [Validators.required]],
      name: ['', Validators.required],
      password: ['', [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)]],
  });
}


// ngAfterViewInit(): void {
//   // Watch for the blur event from any input element on the form.
//   // This is required because the valueChanges does not provide notification on blur
//   const controlBlurs: Observable<any>[] = this.formInputElements
//   .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

//   // Merge the blur event observable with the valueChanges observable
//   // so we only need to subscribe once.
//   merge(this.signupForm.valueChanges, ...controlBlurs).pipe(
//   debounceTime(800)
//   ).subscribe(value => {
//     this.displayMessage = this.genericValidator.processMessages(this.signupForm);
//   });
//   }

  postItem() {
    console.log(this.LoginForm.value);
    // console.log(mail);
    // console.log(name);
    // console.log(pass);

    this.loginItem.email = this.LoginForm.value.email;
    this.loginItem.name = this.LoginForm.value.name;
    this.loginItem.password = this.LoginForm.value.password;
    this.logindata = this.loginItem;
    console.log(this.logindata);
    if(this.LoginForm.value.email ==='' && this.LoginForm.value.name === '' && this.LoginForm.value.password === ''){
      alert('Enter Details');
    }else{
    this.loginService.getLoginDataByMail(this.LoginForm.value.email).subscribe(d => {
      console.log(d);
      let aa: Array<ILoginData> = [];
      console.log(d[0]);
      if (d[0] === undefined) {
          console.log("In If")
          this.loginService.postLoginDataByMail(this.LoginForm.value).subscribe(dd => {
            this.router.navigate(['/login']);
            console.log(dd);
          });
        //  else {
        //   console.log("hgdsf")
        //   alert('username already exists');
        // }
      } else {
        console.log("LLLLL");
        if (d[0].email === undefined) {
          console.log("In If")
          this.loginService.postLoginDataByMail(this.LoginForm.value).subscribe(dd => {
            this.router.navigate(['/login']);
            console.log(dd);
          });
        } else {
          alert('username already exists');
        }
      }

      // console.log(d[0].email);
      // if (d[0].email === undefined) {
      //   console.log("In If")
      //   this.loginService.postLoginDataByMail(this.LoginForm.value).subscribe(dd => {
      //     this.router.navigate(['/login']);
      //     console.log(dd);
      //   });
      // } else {
      //   alert('username already exists');
      // }

    });
  }
  }
  get f(){
    return this.LoginForm.controls;
  }

  getStatus() {
    if(this.mail1 !== '' && this.username1 !== '' && this.pass1 !== ''){
      return false;
    }
    return true;
  }

}
