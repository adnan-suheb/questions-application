import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { QuestionService } from '../../service/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder,
    private _uuidService: UuidService,
    private _questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      questionTitle: ['', Validators.required],
      questionAnswer: ['', Validators.required],
      difficulty: ['', Validators.required],
      answers: this.fb.array([])  // FormArray for answers
    });
  }

  get answersArray(): FormArray {
    return this.formGroup.get('answers') as FormArray;
  }

  addTextAnswer(): void {
    const answerGroup = this.fb.group({
      type: ['text'],
      answerText: ['', Validators.required]
    });
    this.answersArray.push(answerGroup);
  }

  addCodeAnswer(): void {
    const answerGroup = this.fb.group({
      type: ['code'],
      answerCode: ['', Validators.required]
    });
    this.answersArray.push(answerGroup);
  }

  removeAnswer(index: number): void {
    this.answersArray.removeAt(index);
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      let newObj = { ...this.formGroup.value, questionId: this._uuidService.generateUuid() };
      this._questionService.addQuestion(newObj);
      this.formGroup.reset();
    }
  }

  onClearForm() {
    this.formGroup.reset();
  }
}
