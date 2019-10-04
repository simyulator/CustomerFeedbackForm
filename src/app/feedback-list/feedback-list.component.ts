import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../model/customermodel';
import { CustomerService } from '../services/service.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  pageTitle = '';
  pageDes = 'US uses imperial system while the rest of the world uses Metric System';
  customerList: ICustomer[];
  feedbackList: [{}];
  idFeed: number;
  idOfTopic: number;
  cus: ICustomer;
  private sub: Subscription;
  feedbackSpecific: ICustomer;

  // tslint:disable-next-line: variable-name
  constructor(private _topicService: CustomerService,
              private route: ActivatedRoute,
              private router: Router
             ) { }

  ngOnInit() {
    this._topicService.getCustomerData().subscribe(
      (customers: ICustomer[]) => {
        this.customerList = customers;
        this.sub = this.route.paramMap.subscribe(
          params => {
            this.idOfTopic = +params.get('topicID');
            // this.editCustomerData(idOfTopic);
            this.getCustomerData(this.idOfTopic);
          }
        );
      }
    );

  }

  getCustomerList(): ICustomer[] {
    return this.customerList;
  }

  getCustomerData(id: number) {
    console.log(id);
    console.log(this.customerList);
    this.customerList.forEach(c => {
      if (c.topicID === id) {
        this.pageTitle = c.topicName;
        this.pageDes = c.topicDescription;
        this.feedbackList = c.topicFeedbacks;
      }
    });
  }

  updateCustomer() {
    console.log('In Func');
    for (const i of this.customerList) {
      if (i.topicID === this.idOfTopic) {
        this.cus = i;
        console.log(i);
        this._topicService.updateCustomerData(i.topicID , this.cus).subscribe();
      }
    }
  }

  deleteFeedback(feedID) {
    this.idFeed = feedID;
    this.customerList.forEach(c => {
      if (c.topicID === this.idOfTopic) {
        c.topicFeedbacks.forEach(f => {
          if (f.feedID === this.idFeed) {
            c.topicFeedbacks = this.deleteByAttr(c.topicFeedbacks, 'feedID', this.idFeed);
          }
        });
      }
    });
    console.log(this.customerList);
    this.updateCustomer();
  }

  deleteByAttr(arr, attr, value) {
    let i = arr.length;
    while (i--) {
       if (arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value ) ) {

           arr.splice(i, 1);

       }
    }
    return arr;
  }

  logout()  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
