import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicFormComponent } from './topic-form-component/topic-form-component.component';
import { TopicsListComponent } from './topics-list-component/topics-list-component.component';


const routes: Routes = [
  {path: 'addTopic', component: TopicFormComponent},
  {path: '', component: TopicsListComponent},
  {path: 'topicList', component: TopicsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
