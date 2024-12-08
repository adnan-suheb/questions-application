

export interface Iquestion {
  questionTitle: string
  questionAnswer: string
  difficulty:string
  questionId:string
  answers: Answer[]
}

export interface Answer {
  type: string
  answerText?: string
  answerCode?: string
}