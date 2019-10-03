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
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { EditTopicComponent } from './edit-topic-component/edit-topic-component.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthServiceService } from './services/auth-service.service';
import { CustomerguardGuard } from './customerguard.guard';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackListComponent,
    FeedbackFormComponent,
    TopicFormComponent,
    TopicsListComponent,
    TopicFormComponent,
    EditTopicComponent,
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
  providers: [AuthServiceService, CustomerguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
