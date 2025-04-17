
export type Category = {
  name: string;
  id: number;
  questions: Question[];

}

export type Question = {
  id: number;
  question: string;
  answer: string;
  point_value: number;
  taken: boolean;
}