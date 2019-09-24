import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/service.service';
import { ICustomer } from '../model/customermodel';

@Component({
  selector: 'app-topics-list-component',
  templateUrl: './topics-list-component.component.html',
  styleUrls: ['./topics-list-component.component.css']
})
export class TopicsListComponent implements OnInit {

  customers: ICustomer[];

  // tslint:disable-next-line: variable-name
  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this._customerService.getCustomerData()
    .subscribe((customers: ICustomer[]) => {
      this.customers = customers;
    });
  }
}
