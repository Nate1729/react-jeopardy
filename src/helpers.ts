import {Question} from './models';

export const initializeCategory = (title: string, questions: string[]) => {
  const convertQuestionToObject = (question: string): Question => 
  {
    return {asked: false, question};
  }

  return {
    title, 
    questions: questions.map(convertQuestionToObject),
  }
};
