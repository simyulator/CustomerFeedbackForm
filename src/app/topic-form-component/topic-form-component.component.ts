import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ICustomer } from '../model/customermodel';
import { CustomerService } from '../services/service.service';
import { Router } from '@angular/router';
import { NgAnalyzeModulesHost } from '@angular/compiler';

@Component({
  selector: 'app-topic-form-component',
  templateUrl: './topic-form-component.component.html',
  styleUrls: ['./topic-form-component.component.css']
})

export class TopicFormComponent implements OnInit {

  topicForm: FormGroup;
  customer: ICustomer;
  errorMessage: string;
  customers: ICustomer[];
  i: number;

  // tslint:disable-next-line: variable-name
  constructor(private fb: FormBuilder, private router: Router, private _customerService: CustomerService) {}

  ngOnInit(): void {
    this._customerService.getCustomerData()
    .subscribe((customers: ICustomer[]) => {
      this.customers = customers;
    });

    this.topicForm = this.fb.group({
      topicName: '',
      topicDescription: '',
    });
    this.randomNumber();
  }

  randomNumber() {
    this.i = Math.floor(Math.random() * 1000 - 1);
    console.log('i = ' + this.i);
    return this.i;
  }
  checkDuplicateID(id: number) {
    let j: number;
    for (j = 0; j < this.customers.length; j++) {
      if (this.customers[j].topicID === id) {
        return true;
      }
    }
    return false;
  }

  saveProduct(): void {
    if (this.checkDuplicateID(this.i)) {
      this.randomNumber();
    }
    if (this.topicForm.dirty) {
        let q: any;
        const p = { ...this.customer, ...this.topicForm.value };
        q = { topicID: this.i, topicName: p.topicName};
        console.log(q);
        this._customerService.createProduct(q)
        .subscribe({
          next: () => this.onSaveComplete(),
          error: err => this.errorMessage = err
        });
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.topicForm.reset();
    this.router.navigate(['']);
  }
}
