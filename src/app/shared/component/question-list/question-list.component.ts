import { Component, Input, OnInit } from '@angular/core';
import { Iquestion } from '../../model/questions.iinterface';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.scss'
})
export class QuestionListComponent implements OnInit {

  @Input() getQuestion!:Iquestion;

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.getQuestion);
    }, 200);
  }

}
