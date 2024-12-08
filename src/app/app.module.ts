import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './shared/component/home/home.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { DialogComponent } from './shared/component/dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionListComponent } from './shared/component/question-list/question-list.component';
import { SingleQuestionComponent } from './shared/component/single-question/single-question.component';
import { QuestionFormComponent } from './shared/component/question-form/question-form.component';
import { AdminDashComponent } from './shared/component/admin-dash/admin-dash.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent,
    QuestionListComponent,
    SingleQuestionComponent,
    QuestionFormComponent,
    AdminDashComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
