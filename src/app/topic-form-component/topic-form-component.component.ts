import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ICustomer } from '../model/customermodel';
import { CustomerService } from '../services/service.service';

@Component({
  selector: 'app-topic-form-component',
  templateUrl: './topic-form-component.component.html',
  styleUrls: ['./topic-form-component.component.css']
})

export class TopicFormComponent implements OnInit {

  topicForm: FormGroup;
  customer: ICustomer;
  errorMessage: string;
  topicTitle = '';
  topicDes = '';

  newTopic: ICustomer = {
    topicID: 0,
    topicName: '',
    topicFeedbacks: [{
        feedID: 0,
        respondent: '',
        feedback: ''
    }]
  };

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private customerService: CustomerService) {}

  ngOnInit() {
    this.topicForm = this.fb.group({
      topicName: '',
      topicDescription: ''
    });
  }

  createTopic() {
    console.log(this.topicTitle);
    console.log(this.topicDes);
    this.newTopic.topicName = this.topicTitle;
    this.customerService.createProduct(this.newTopic).subscribe(data => {
      console.log(data);
    })
    // this.newTopic.to
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.topicForm.reset();
    this.router.navigate(['/products']);

  }
}
