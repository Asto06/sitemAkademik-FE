import { StudentData } from "./IStudent";

export interface ParentData {
  email?: string;
  emailSend: string;
  father: string;
  mother: string;
  birthDate: string;
  student: StudentData;
  status?: string;
}

export interface getParent {
  _id?: string;
  email?: string;
  emailSend: string;
  father: string;
  mother: string;
  birthDate: string;
  student: Array<StudentData>;
  status?: string;
  role?: string;
}

export interface editParent {
  _id?: string;
  email?: string;
  father: string;
  mother: string;
  birthDate: string;
  student: Array<StudentData>;
}