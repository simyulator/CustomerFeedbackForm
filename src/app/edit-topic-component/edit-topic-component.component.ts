import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../services/service.service';
import { ICustomer } from '../model/customermodel';

@Component({
  selector: 'app-edit-topic-component',
  templateUrl: './edit-topic-component.component.html',
  styleUrls: ['./edit-topic-component.component.css']
})
export class EditTopicComponent implements OnInit {

  topicForm: FormGroup;
  customer: ICustomer;
  errorMessage: string;

  constructor(private fb: FormBuilder, private router: Router, private customerService: CustomerService) {}

  ngOnInit() {
    this.topicForm = this.fb.group({
      topicName: '',
      topicDescription: ''
    });
  }

  updateProduct(): void {
    if (this.topicForm.dirty) {

    }
  }

}
