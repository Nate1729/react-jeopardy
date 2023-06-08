import { ReactNode } from 'react';


/* Category type: needs a title
 * and exactly 6 questions. Questions
 * are ReactNodes so images can be used
 */
export interface Category {
  title: string;
  questions: [ReactNode, ReactNode, ReactNode, ReactNode, ReactNode];
}


export interface Game {
  title?: string;
  categories: [Category, Category, Category, Category, Category, Category];
}
