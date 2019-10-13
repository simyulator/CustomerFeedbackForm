import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomer } from '../model/customermodel';
import { Subscription } from 'rxjs';
import { IMail } from '../model/mailmodel';

@Component({
  selector: 'app-email-feedback',
  templateUrl: './email-feedback.component.html',
  styleUrls: ['./email-feedback.component.css']
})

//Sends Mail to the user with feedback
export class EmailFeedbackComponent implements OnInit {

  subject: string;
  feedback: string;
  customerList: ICustomer[];
  to: string;
  private sub: Subscription;
  idTopic: number;
  idFeed: number;
  randomFeedID: number;

  mailOptions = {
    from: 'rnqsharma3@gmail.com',
    to: 'raunaqsh97@gmail.com',
    subject: 'Welcome Email',
    text: 'This is the email sent through Gmail SMTP Server.'
    };
    mailOP: IMail;

  // tslint:disable-next-line: variable-name
  constructor(private _topicService: CustomerService,
              private route: ActivatedRoute,
              private router: Router) { }



  ngOnInit() {

    this._topicService.getCustomerData().subscribe(
      (customers: ICustomer[]) => {
        this.customerList = customers;
        this.sub = this.route.paramMap.subscribe(
          params => {
            this.idTopic = +params.get('topicID');
            this.idFeed = +params.get('feedID');
            // this.editCustomerData(idOfTopic);
            // this.sendMail();
          }
        );
      }
    );

  }

  notify() {

    console.log("In sendmail")
    alert('Feedback sent to ' + this.to + '. Redirecting.');
    this.router.navigate(['/feedback/' + this.idTopic]);

  }

  // Calls the service method in services/Service.ts
  sendMail() {
    this.mailOptions.to = this.to;
    this.mailOptions.subject = this.subject;
    this.mailOptions.text = this.feedback;
    this.mailOP = this.mailOptions;
    this._topicService.sendMail(this.mailOP).subscribe(d => {

      console.log(d);
    });
  }

  // Unables or Disables the button
  getButtonStatus() {
    if (this.to !== '' && this.subject !== '' && this.feedback !== '') {
      return false;
    }
    return true;
  }

}
