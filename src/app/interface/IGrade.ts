export interface GradeData {
  _id?: string;
  className?: string;
  student?: Array<studentGrade>;
}

export interface gradeScore {
  _id?: string;
  student: string;
}

export interface studentGrade {
  _id: string;
  fullName: string;
  status: string;
  grade: grade;
}

export interface grade {
  _id?: string;
  grade?: string;
}

export interface setGrade {
  student: string;
  grade: string;
}
