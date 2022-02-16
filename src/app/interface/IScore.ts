export interface ScoreData {
  _id?: string;
  className?: string;
  student?: Array<student>;
}

export interface addScore {
  _id?: string;
  student: string;
  course: string
}

export interface student {
  _id: string;
  fullName: string;
  email: string;
  status: string;
  score: Array<studentScore>;
}

export interface studentScore {
  _id: string;
  course: scoreCourse;
  dailyScore: string;
  midtest: string;
  finaltest: string;
  resultScore: string;
}

export interface scoreCourse {
  _id: string;
  course: string;
}
