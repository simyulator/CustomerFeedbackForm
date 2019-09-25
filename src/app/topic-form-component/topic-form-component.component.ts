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

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private customerService: CustomerService) {}

  ngOnInit(): void {
    this.topicForm = this.fb.group({
      topicName: '',
      topicDescription: ''
    });
  }

  // saveProduct(): void {
  //     if (this.topicForm.dirty) {
  //       const p = { ...this.customer, ...this.topicForm.value };
  //       console.log('p = ' + p);
  //       this.customerService.createProduct(p)
  //       .subscribe({
  //         next: () => this.onSaveComplete(),
  //         error: err => this.errorMessage = err
  //       });
  //   }
  // }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.topicForm.reset();
    this.router.navigate(['/products']);
  }
}
