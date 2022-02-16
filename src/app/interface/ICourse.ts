import { TeacherData } from "./ITeacher";

export interface CourseData {
  _id?: string;
  course: string;
  teacher?: TeacherData;
}

export interface setCourse {
  _id?: string;
  course?: string;
  teacher: TeacherData;
  courseBefore: string;
  courseAfter: string;
}