import { Score } from './Score';
import { Student } from './Student';

export class Classes {
  _id?: string;
  className?: string;
  yearAcademic?: number;
  semester?: string;
  student?: Array<Student>;
}
