import { Category } from './types';

export const mockData: Category[] = [
  {
    name: 'Science',
    id: 1,
    questions: [
      {
        id: 1,
        question: 'The powerhouse of the cell',
        answer: 'Mitochondria',
        point_value: 100,
        taken: true,
      },
      {
        id: 2,
        question: 'The third planet from the sun',
        answer: 'Earth',
        point_value: 200,
        taken: false,
      },
    ],
  },
  {
    name: 'History',
    id: 2, 
    questions: [
      {
        id: 3,
        question: 'Year the US declared independence',
        answer: '1776',
        point_value: 100,
        taken: false,
      },
      {
        id: 4,
        question: "The emperor during Rome's transformation from Republic to Empire",
        answer: 'Julius Caesar',
        point_value: 200,
        taken: false,
      },
      {
        id: 5,
        question: "Author of '1984' and 'Animal Farm'",
        answer: 'George Orwell',
        point_value: 100,
        taken: false,
      },
    ],
  },
];
