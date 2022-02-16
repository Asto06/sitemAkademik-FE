import { ClassData } from './IClass';
import { CourseData } from './ICourse';
import { StudentData } from './IStudent';
import { TeacherData } from './ITeacher';

export interface ResponseData {
  Message: TeacherData;
}

export interface ResDataStudent {
  Message: StudentData;
}

export interface ResDataClass {
  Message: ClassData;
}

export interface ResDataCourse {
  Message: CourseData
}
