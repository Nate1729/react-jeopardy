import { ReactNode } from 'react';


/* Category type: needs a title
 * and exactly 6 questions. Questions
 * are ReactNodes so images can be used
 */
export interface Category {
  title: string;
  questions: Question[];
}

export interface Question {
  question: string | ReactNode;
  asked: boolean;
}


export interface Game {
  title?: string;
  categories: { [key: string]: Category};
  categoryKeyOrder: string[];
}
