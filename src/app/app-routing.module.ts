import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicFormComponent } from './topic-form-component/topic-form-component.component';
import { TopicsListComponent } from './topics-list-component/topics-list-component.component';
import { EditTopicComponent } from './edit-topic-component/edit-topic-component.component';


const routes: Routes = [
  {path: 'addTopic', component: TopicFormComponent},
  {path: '', component: TopicsListComponent},
  {path: 'topicList', component: TopicsListComponent},
  {path: 'editTopic', component: EditTopicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
