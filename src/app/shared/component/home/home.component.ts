import { Component, OnInit } from '@angular/core';
import { Iquestion } from '../../model/questions.iinterface';
import { QuestionService } from '../../service/question.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  allQuestionsArr$!: Observable<Iquestion[]>;

  constructor(
    private _questionService: QuestionService
  ) { }

  ngOnInit(): void {
   this.getQuestions();
  }

  getQuestions() {
    this.allQuestionsArr$ = this._questionService.fetchQuestions();
    console.log(this.allQuestionsArr$);

  }



}
