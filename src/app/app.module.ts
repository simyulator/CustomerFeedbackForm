import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { TopicFormComponent } from './topic-form-component/topic-form-component.component';
import { TopicsListComponent } from './topics-list-component/topics-list-component.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackListComponent,
    FeedbackFormComponent,
    TopicFormComponent,
    TopicsListComponent,
    LoginFormComponent,
    AddFeedbackComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
