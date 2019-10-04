import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/service.service';
import { ICustomer } from '../model/customermodel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-topic-component',
  templateUrl: './edit-topic-component.component.html',
  styleUrls: ['./edit-topic-component.component.css']
})
export class EditTopicComponent implements OnInit {

  pageTitle = '';
  newRes = 'a';
  newFed = 'a';
  newTopicName = '';
  newTopicDes = '';
  newTopicName1 = '';
  newTopicDes1 = '';
  topicForm: FormGroup;
  customer: ICustomer;
  errorMessage: string;
  customerList: ICustomer[];
  idTopic: number;
  customerSpecific: ICustomer;
  private sub: Subscription;
  feedbackList = <any> [{}];
  productForm: FormGroup;




  constructor(private fb: FormBuilder, private router: Router, private _customerService: CustomerService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.topicForm = this.fb.group({
      topicName: '',
      topicDescription: ''
    });


    this._customerService.getCustomerData().subscribe(
      (customers: ICustomer[]) => {
        this.customerList = customers;
        this.sub = this.route.paramMap.subscribe(
          params => {
            this.idTopic = +params.get('topicID');
            // this.idFeed = +params.get('feedID');
            // this.editCustomerData(idOfTopic);
            this.getCustomerData(this.idTopic);
          }
        );
      }
    );
  }

  updateProduct(): void {
    if (this.topicForm.dirty) {

    }
  }

  getCustomerData(id: number): void {
    this.customerList.forEach(c => {
      if (c.topicID === id) {
        this.customerSpecific = c;
      }
    });
    console.log(this.customerSpecific.topicName);
    console.log(this.customerSpecific.topicDescription);
    this.newTopicName = this.customerSpecific.topicName;
    this.newTopicDes = this.customerSpecific.topicDescription;

    // this.customerSpecific.topicName = this.newTopicName;
    // this.customerSpecific.topicDescription = this.newTopicDes;

    // this.feedbackList = this.customerSpecific.topicFeedbacks;


    if (this.productForm) {
        this.productForm.reset();
      }


    // if (this.customerSpecific.topicID === 0) {
    //   this.pageTitle = 'Add Product';
    //   } else {
    //   this.pageTitle = `Ticket ID: ${this.customerSpecific.topicID}`;
    // }

      // Update the data on the form

    // this.feedbackList.forEach(c => {

    //     if (this.idFeed === c.feedID) {
    //       this.res = c.respondent;
    //       this.fed = c.feedback;
    //       this.productForm.patchValue({
    //         name: c.respondent,
    //         eMail: c.respondent,
    //         feedback: c.feedback,
    //         });
    //     }
    //   });

  }


  sendEditedCustomerData() {
    // console.log("djvfjvdshj");
    console.log(this.newFed);

    // this.customerList.forEach(c => {
    //   if (c.topicID === this.idTopic) {
    //     this.customerSpecific = c;
    //   }
    // });

    // this.customerSpecific.topicFeedbacks.forEach(tf => {
    //   if (tf.feedID === this.idFeed) {
    //     tf.feedback = this.newFed;
    //     tf.respondent = this.newRes;
    //   }

    // });
    // console.log(this.newRes);
    // console.log(this.customerSpecific);
    // console.log(this.updatedCustomer);
    if (this.newTopicName1 === '') {
      this.customerSpecific.topicName = this.newTopicName;
    }
    else if( this.newTopicDes1 === '' ){
      this.customerSpecific.topicName = this.newTopicDes;
    }
    else {
      this.customerSpecific.topicName = this.newTopicName1;
      this.customerSpecific.topicDescription = this.newTopicDes1;
    }
    
    this._customerService.updateCustomerData(this.customerSpecific.topicID , this.customerSpecific).subscribe(data => {
      console.log(data);
      this.router.navigate(['topicList']);
    });
  }

  editCustomerData(): void {
    console.log(this.newRes);
  }

}
