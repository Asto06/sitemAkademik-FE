import { Course } from './Course';

export class Score {
  _id?: string;
  course?: Course;
  dailyScore?: number;
  midtest?: number;
  finaltest?: number;
  resultScore?: number;
}
