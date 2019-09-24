import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicsListComponent } from './topics-list-component/topics-list-component.component';
import { HttpClientModule } from '@angular/common/http';
import { TopicFormComponent } from './topic-form-component/topic-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsListComponent,
    TopicFormComponent,
    TopicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TopicsListComponent]
})
export class AppModule { }
