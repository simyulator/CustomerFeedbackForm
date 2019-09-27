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
  // tslint:disable-next-line: variable-name
  constructor(private fb: FormBuilder, private router: Router, private _customerService: CustomerService) { }

  ngOnInit() {
    this._customerService.getCustomerData()
    .subscribe((customers: ICustomer[]) => {
      this.customers = customers;
    });
  }



  deleteTopic(id: number): void {
    if (confirm(`Really delete this topic?`)) {
        this._customerService.deleteTopic(id)
        .subscribe({
          error: err => this.errorMessage = err
        });
      }
  }
}
