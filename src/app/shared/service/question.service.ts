import { Injectable } from '@angular/core';
import { Iquestion } from '../model/questions.iinterface';
import { Observable, of } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {


  questionsArr: Array<Iquestion> = [
    {
      questionId: '1',
      questionTitle: 'What is Angular?',
      questionAnswer: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      difficulty: 'easy',  // Added difficulty
      answers: [
        {
          type: 'text',
          answerText: 'Angular is a front-end framework developed and maintained by Google. It uses TypeScript, a superset of JavaScript.'
        },
        {
          type: 'code',
          answerCode: 'const angularExample = "Angular framework";'
        }
      ]
    },
    {
      questionId: '2',
      questionTitle: 'What is Dependency Injection in Angular?',
      questionAnswer: 'Dependency Injection is a design pattern used to implement IoC (Inversion of Control), where a class\'s dependencies are injected into it, rather than it creating them.',
      difficulty: 'medium',  // Added difficulty
      answers: [
        {
          type: 'text',
          answerText: 'Dependency Injection allows Angular to manage the services and components that a class depends on.'
        },
        {
          type: 'code',
          answerCode: '@Injectable() class MyService { constructor(private http: HttpClient) {} }'
        },
        {
          type: 'code',
          answerCode: '@NgModule({ providers: [MyService] }) export class AppModule {}'
        }
      ]
    },
    {
      questionId: '3',
      questionTitle: 'What is the Angular CLI?',
      questionAnswer: 'The Angular CLI is a command-line interface tool used to automate the development process in Angular applications.',
      difficulty: 'easy',  // Added difficulty
      answers: [
        {
          type: 'text',
          answerText: 'The CLI helps with creating Angular apps, components, services, and even running tests.'
        },
        {
          type: 'code',
          answerCode: 'ng new my-angular-app'
        }
      ]
    },
    {
      questionId: '4',
      questionTitle: 'Explain Angular Modules.',
      questionAnswer: 'An Angular module is a mechanism to group components, services, directives, and pipes. It helps organize an application into cohesive blocks.',
      difficulty: 'medium',  // Added difficulty
      answers: [
        {
          type: 'text',
          answerText: 'Modules allow Angular to optimize the application and handle lazy loading for better performance.'
        },
        {
          type: 'code',
          answerCode: 'import { NgModule } from \'@angular/core\';'
        },
        {
          type: 'code',
          answerCode: '@NgModule({ declarations: [AppComponent], imports: [BrowserModule] }) export class AppModule {}'
        }
      ]
    },
    {
      questionId: '5',
      questionTitle: 'What are Observables in Angular?',
      questionAnswer: 'An Observable is a stream of asynchronous events that can be processed over time. In Angular, it is used to handle HTTP requests, events, etc.',
      difficulty: 'hard',  // Added difficulty
      answers: [
        {
          type: 'text',
          answerText: 'Observables provide a way to subscribe to data streams and handle asynchronous data flow in Angular.'
        },
        {
          type: 'code',
          answerCode: 'import { Observable } from \'rxjs\';'
        },
        {
          type: 'code',
          answerCode: 'this.http.get(\'api/data\').subscribe(response => console.log(response));'
        }
      ]
    }
  ];




  constructor(
    private _snackbarService:SnackbarService
  ) { }

  fetchQuestions(): Observable<Iquestion[]> {
    return of(this.questionsArr);
  }

  addQuestion(obj: Iquestion) {
    this.questionsArr.push(obj);
    this._snackbarService.openSnackbar("New Question Added Successfully!!!")
  }
}
