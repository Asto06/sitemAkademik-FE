import { Course } from "../_models/Course";
import { ClassData, classTeacher } from "./IClass";
import { CourseData } from "./ICourse";
import { grade } from "./IGrade";
import { studentScore } from "./IScore";

export interface TeacherData {
  id?: string,
  email?: string,
  emailSend: any;
  password?: string,
  fullName: string,
  birthDate: string,
  course: string,
  teachClass: string,
  schedule?: string,
}

export interface teacherSpesific {
  _id?: string,
  email?: string,
  emailSend: any;
  fullName: string,
  birthDate: string,
  course: Array<CourseData>,
  teachClass: Array<classTeacher>,
}

export interface editTeacher {
  _id?: string,
  email?: string,
  fullName: string,
  birthDate: string,
  course: string,
  teachClass: string,
}

export interface CourseTeacher {
  _id?: string,
  email?: string;
  fullName?: string,
  birthDate?: string,
  course?: Array<Course>,
  teachClass?: Array<ClassData>,
}

export interface TeacherClassSpesific {
  _id?: string,
  email?: string,
  emailSend: any;
  password?: string,
  fullName: string,
  birthDate: string,
  course: Array<CourseData>,
  teachClass: Array<classTeacher>,
  schedule?: string,
}

export interface teacherStudent {
  _id: string;
  email: string;
  fullName: string;
  score: Array<studentScore>;
  grade: grade;
}