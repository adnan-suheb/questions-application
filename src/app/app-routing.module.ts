import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { AdminDashComponent } from './shared/component/admin-dash/admin-dash.component';
import { QuestionFormComponent } from './shared/component/question-form/question-form.component';
import { SingleQuestionComponent } from './shared/component/single-question/single-question.component';

const routes: Routes = [

  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },

  {
    path: 'admin',
    component: AdminDashComponent,
    children: [
      {
        path: "addQuestion",
        component: QuestionFormComponent
      },
      {
        path: ":questionId",
        component: SingleQuestionComponent
      }, {
        path: ":questionId/editQuestion",
        component: SingleQuestionComponent
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'page-not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
