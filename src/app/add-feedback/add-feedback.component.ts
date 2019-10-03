import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICustomer } from '../model/customermodel';
import { CustomerService } from '../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  newRes = '';
  newFed = '';
  newmail = '';
  pageTitle = '';
  private sub: Subscription;
  customerList: ICustomer[];
  customerSpecific: ICustomer;
  customerSpecific2: ICustomer;
  updatedCustomer: ICustomer;
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  feedbackList = <any> [{}];
  newFeed = {
    feedID: 0,
    respondent: '',
    email: '',
    feedback: ''
  };
  idTopic: number;
  idFeed: number;
  randomFeedID: number;


  // tslint:disable-next-line: variable-name
  constructor(private _topicService: CustomerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.randomFeedID = this.randomID(1, 100);
    // this.newFeed.feedID = 0;
    // this.newFeed.feedback = '';
    // this.newFeed.respondent = '';

    this._topicService.getCustomerData().subscribe(
      (customers: ICustomer[]) => {
        this.customerList = customers;
        this.sub = this.route.paramMap.subscribe(
          params => {
            this.idTopic = +params.get('topicID');
            this.idFeed = +params.get('feedID');
            // this.editCustomerData(idOfTopic);
            this.sendEditedCustomerData();
          }
        );
      }
    );

  }

  randomID = (i, j) => {
    return Math.ceil(Math.random() * ( j - i) + i);
  }


  sendEditedCustomerData() {
    console.log();
    console.log(this.newFed);

    this.customerList.forEach(c => {
      if (c.topicID === this.idTopic) {
        this.customerSpecific = c;
      }
    });

    this.newFeed.feedID = this.randomFeedID;
    console.log(this.newRes);
    console.log(this.customerSpecific);
    // console.log(this.updatedCustomer);
  }

  editCustomerData() {

  }


  copyCustomerData() {
    this.newFeed.feedback = this.newFed;
    this.newFeed.respondent = this.newRes;
    this.newFeed.email = this.newmail;
    this.customerSpecific.topicFeedbacks.push(this.newFeed);
    console.log(this.customerSpecific);
    this._topicService.updateCustomerData(this.customerSpecific.topicID, this.customerSpecific).subscribe(data => {
      console.log(data);
      this.router.navigate(['feedback/' + this.idTopic]);
    });
  }


}
