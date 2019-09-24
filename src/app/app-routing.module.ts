import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsListComponent } from './topics-list-component/topics-list-component.component';
import { TopicFormComponent } from './topic-form-component/topic-form-component.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';


const routes: Routes = [
  {path: 'addTopic', component: TopicFormComponent},
  {path: '', component: TopicsListComponent},
  {path: 'topicList', component: TopicsListComponent},
  {path: 'feedback', component: FeedbackListComponent},
  {path: 'feedback/:topicID/edit', component: FeedbackFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
