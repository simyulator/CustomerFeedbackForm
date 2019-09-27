import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsListComponent } from './topics-list-component/topics-list-component.component';
import { TopicFormComponent } from './topic-form-component/topic-form-component.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';


const routes: Routes = [
  {path: 'addTopic', component: TopicFormComponent},
  {path: '', component: LoginFormComponent},
  {path: 'topicList', component: TopicsListComponent},
  {path: 'feedback/:topicID', component: FeedbackListComponent},
  {path: 'feedbackedit/:topicID/:feedID', component: FeedbackFormComponent},
  {path: 'feedbackadd/:topicID', component: AddFeedbackComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'signup', component: SignupFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
