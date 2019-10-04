import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsListComponent } from './topics-list-component/topics-list-component.component';
import { EditTopicComponent } from './edit-topic-component/edit-topic-component.component';
import { TopicFormComponent } from './topic-form-component/topic-form-component.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CustomerguardGuard } from './customerguard.guard';
import { AuthServiceService } from './services/auth-service.service';
import { EmailFeedbackComponent } from './email-feedback/email-feedback.component';


const routes: Routes = [
  {path: 'addTopic', component: TopicFormComponent, canActivate: [AuthServiceService]},
  // {path: '', component: TopicsListComponent},
  {path: 'topicList',
  component: TopicsListComponent, canActivate: [AuthServiceService]},
  {path: 'editTopic/:topicID', component: EditTopicComponent, canActivate: [AuthServiceService] },
  {path: '', component: LoginFormComponent},
  {path: 'topicList', component: TopicsListComponent, canActivate: [AuthServiceService]},
  {path: 'feedback/:topicID', component: FeedbackListComponent, canActivate: [AuthServiceService]},
  {path: 'feedbackedit/:topicID/:feedID', component: FeedbackFormComponent, canActivate: [AuthServiceService]},
  {path: 'feedbackadd/:topicID', component: AddFeedbackComponent, canActivate: [AuthServiceService]},
  {path: 'login', component: LoginFormComponent},
  {path: 'signup', component: SignupFormComponent},
  {path: 'sendmail/:topicID', component: EmailFeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
