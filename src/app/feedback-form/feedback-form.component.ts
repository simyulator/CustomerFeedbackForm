import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FeedbackListComponent } from '../feedback-list/feedback-list.component';
import { CustomerService } from '../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable, fromEvent, merge } from 'rxjs';
import { ICustomer } from '../model/customermodel';
import { FormGroup, FormBuilder, FormArray, Validators, FormControlName, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { GenericValidator } from '../validator/generic-validator';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit, AfterViewInit {


  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];


  pageTitle = '';
  newRes = 'a';
  newFed = 'a';
  newMail = '';
  private sub: Subscription;
  customerList: ICustomer[];
  customerSpecific: ICustomer;
  updatedCustomer: ICustomer;
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  feedbackList = <any> [{}];
  idTopic: number;
  idFeed: number;
  productForm: FormGroup;
  res: string;
  fed: string;
  mail: string;
  private genericValidator: GenericValidator;


  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  // private genericValidator: GenericValidator;

    get tags(): FormArray {
    return this.productForm.get('tags') as FormArray;
    }


  // tslint:disable-next-line: variable-name
  constructor(private _topicService: CustomerService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.productForm = this.fb.group({
      name: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],
      eMail: ['', Validators.required],
      feedback: ['', Validators.required],
      tags: this.fb.array([]),
      description: ''
    });


    this._topicService.getCustomerData().subscribe(
      (customers: ICustomer[]) => {
        this.customerList = customers;
        this.sub = this.route.paramMap.subscribe(
          params => {
            this.idTopic = +params.get('topicID');
            this.idFeed = +params.get('feedID');
            // this.editCustomerData(idOfTopic);
            this.getCustomerData(this.idTopic);
          }
        );
      }
    );
  }

  ngAfterViewInit(): void {

    const controlBlurs: Observable<any>[] = this.formInputElements
.map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(this.productForm.valueChanges, ...controlBlurs).pipe(
  debounceTime(800)
  ).subscribe(value => {
  this.displayMessage = this.genericValidator.processMessages(this.productForm);
  });
  }

  addTag(): void {
  this.tags.push(new FormControl());
  }

  deleteTag(index: number): void {
  this.tags.removeAt(index);
  this.tags.markAsDirty();
  }





  createProduct() {
    console.log();
  }

  processCustomerData() {
    // this._customerList.customerList
  }

  sendEditedCustomerData() {
    // console.log("djvfjvdshj");
    console.log(this.newFed);

    this.customerList.forEach(c => {
      if (c.topicID === this.idTopic) {
        this.customerSpecific = c;
      }
    });

    this.customerSpecific.topicFeedbacks.forEach(tf => {
      if (tf.feedID === this.idFeed) {
        tf.feedback = this.newFed;
        tf.respondent = this.newRes;
        tf.email = this.newMail;
      }

    });
    console.log(this.newRes);
    console.log(this.customerSpecific);
    // console.log(this.updatedCustomer);
    this._topicService.updateCustomerData(this.customerSpecific.topicID , this.customerSpecific).subscribe(data => {
      console.log(data);
    });
  }

  editCustomerData(): void {
    console.log(this.newRes);
  }

  getCustomerData(id: number): void {
    this.customerList.forEach(c => {
      if (c.topicID === id) {
        this.customerSpecific = c;
      }
    });

    this.feedbackList = this.customerSpecific.topicFeedbacks;


    if (this.productForm) {
        this.productForm.reset();
      }


    if (this.customerSpecific.topicID === 0) {
      this.pageTitle = 'Add Product';
      } else {
      this.pageTitle = `Ticket ID: ${this.customerSpecific.topicID}`;
    }

      // Update the data on the form

    this.feedbackList.forEach(c => {

        if (this.idFeed === c.feedID) {
          this.res = c.respondent;
          this.fed = c.feedback;
          this.mail = c.eMail;
          this.productForm.patchValue({
            name: c.respondent,
            eMail: c.respondent,
            feedback: c.feedback,
            });
        }
      });

  }

  // getStatus(){
  //   if(this.newFed !== '' && this.newMail !== '' && this.newRes !== ''){
  //     return false;
  //   }
  //   return true;
  // }

}
