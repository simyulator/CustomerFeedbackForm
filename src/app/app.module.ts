import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { TopicFormComponent } from './topic-form-component/topic-form-component.component';
import { TopicsListComponent } from './topics-list-component/topics-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackListComponent,
    FeedbackFormComponent,
    TopicFormComponent,
    TopicsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
