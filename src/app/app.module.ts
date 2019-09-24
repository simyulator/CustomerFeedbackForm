import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicsListComponent } from './topics-list-component/topics-list-component.component';
import { HttpClientModule } from '@angular/common/http';
import { TopicFormComponent } from './topic-form-component/topic-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsListComponent,
    TopicFormComponent
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
