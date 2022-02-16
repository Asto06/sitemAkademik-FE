import { grade } from "./IGrade";
import { studentScore } from "./IScore";

export interface ClassData {
  _id?: string;
  className: string;
  yearAcademic: number;
  homeTeacher?: ClassHome;
  semester: string;
  student?: string;
}

export interface classTeacher {
  _id?: string;
  className?: string;
  yearAcademic?: number;
  homeTeacher?: ClassHome;
  semester?: string;
  student?: Array<studentClassTeacher>;
}

export interface studentClassTeacher {
  _id: string;
  email: string;
  fullName: string;
  status: string;
  score: Array<studentScore>
  grade: grade;
}

export interface ClassHome {
  homeroomName: HomeroomClass
}

export interface HomeroomClass {
  fullName: string;
}

export interface editClass {
  _id?: string;
  className: string;
  yearAcademic: string;
  homeTeacher?: string;
  semester: string;
  student?: string;
}

