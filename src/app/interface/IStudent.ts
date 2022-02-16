import { ClassData } from "./IClass";
import { grade } from "./IGrade";
import { studentScore } from "./IScore";

export interface StudentData {
  _id?: string,
  nis?: string,
  emailSend: string,
  email?: string,
  password?: string,
  fullName: string,
  parent?: any,
  birthDate: string,
  classes: string,
  status?: string,
  semester: string
}

export interface StudentClass {
  _id?: string,
  nis?: string,
  email: string,
  password?: string,
  fullName: string,
  birthDate: string,
  classes: ClassData,
  status?: string,
}

export interface StudentSpesific {
  id?: string,
  nis: any,
  email: string,
  fullName: string,
  birthDate: string,
  classes: ClassData,
  status?: string,
  parent: any,
  role: string,
  yearAcademic: string,
}

export interface editStudent {
  _id?: string,
  email?: string,
  fullName: string,
  birthDate: string,
  classBefore: string,
  classAfter: string,
}

export interface studentSpec {
  _id: string,
  nis: string,
  emailSend: string,
  email: string,
  password: string,
  fullName: string,
  parent: any,
  birthDate: string,
  classes: string,
  status: string,
  semester: string,
  score: Array<studentScore>,
  grade: grade,
}
export interface studentGetData {
  _id: string,
  nis: string,
  emailSend: string,
  email: string,
  password: string,
  fullName: string,
  parent: any,
  birthDate: string,
  classes: any,
  status: string,
  semester: string,
  score: Array<studentScore>,
  grade: grade,
  yearAcademic: string,
}