import { Component, OnInit, ElementRef, AfterViewInit, ViewChildren } from '@angular/core';
import { ILoginData } from '../model/loginmodel';
import { CustomerService } from '../services/service.service';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { NumberValidators } from '../validator/number.validator';
import { Observable, fromEvent, Subscription, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GenericValidator } from '../validator/generic-validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  loginItem = {
    email: '',
    name: '',
    password: '',
  };
  logindata: ILoginData;
  signupForm: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;


  private validationMessages: { [key: string]: { [key: string]: string } };
  backimg = 'assets/image/logo.png';
  constructor(private loginService: CustomerService,
              private fb: FormBuilder
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

    this.signupForm = this.fb.group({
      eMail: ['', [Validators.required]],
      userName: ['', Validators.required],
      password: ['', [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)]],
      tags: this.fb.array([]),
      description: ''
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
  get f(){
    return this.signupForm.controls;
  }

}
