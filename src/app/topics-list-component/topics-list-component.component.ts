import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/service.service';
import { ICustomer } from '../model/customermodel';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics-list-component',
  templateUrl: './topics-list-component.component.html',
  styleUrls: ['./topics-list-component.component.css']
})
export class TopicsListComponent implements OnInit {

  customers: ICustomer[];
  errorMessage: string;
  topicEditForm: FormGroup;
  id: number;
  // tslint:disable-next-line: variable-name
  constructor(private fb: FormBuilder, private router: Router, private _customerService: CustomerService  ) { }

  ngOnInit() {
    this._customerService.getCustomerData()
    .subscribe((customers: ICustomer[]) => {
      this.customers = customers;
    });
  }

  deleteTopic(id: number): void {
    console.log(id);
    this.id = id;
    // this.deleteFeedback();
    if (confirm(`Really delete this topic?`)) {
        this._customerService.deleteTopic(id)
        .subscribe(() => {
          this.router.navigate(['/topicList']);
          // error: err => this.errorMessage = err;
          this.deleteFeedback();
        });
      }
  }

  deleteFeedback() {
    // this.idFeed = feedID;
    console.log("lll");
    this.customers.forEach(c => {
      if (c.topicID === this.id) {
            this.deleteByAttr(this.customers, 'topicID', this.id);
      }
    });
    console.log(this.customers);
    // this.updateCustomer();
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
