export interface HomeroomData {
  _id?: String;
  homeroomName: HomeTeach;
  className: HomeClass;
  role?: string;
}

export interface HomeTeach {
  _id: string;
  email: string;
  fullName: string;
}

export interface HomeClass {
  _id: string;
  className: string;
  yearAcademic: string;
  semester: string;
  student: Array<HomeStudent>
}

export interface HomeStudent {
  _id: string;
  email: string;
  fullName: string;
  status: string;
  score: Array<ScoreClass>
}

export interface ScoreClass {
  _id: string;
  course: CourseHome,
  dailyScore: string;
  midtest: string;
  finaltest: string;
  resultScore: string;
}

export interface CourseHome {
  _id: string;
  course: string;
}

export interface editHomeroom {
  _id?: string;
  homeroomName: string;
  classBefore: string;
  classAfter: string;
}