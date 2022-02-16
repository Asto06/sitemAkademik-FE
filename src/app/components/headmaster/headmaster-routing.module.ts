import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllClassComponent } from './class/all-class/all-class.component';
import { ClassComponent } from './class/class.component';
import { CreateClassComponent } from './class/create-class/create-class.component';
import { DetailClassComponent } from './class/detail-class/detail-class.component';
import { EditClassComponent } from './class/edit-class/edit-class.component';
import { AllCourseComponent } from './course/all-course/all-course.component';
import { CourseComponent } from './course/course.component';
import { CreateCourseComponent } from './course/create-course/create-course.component';
import { DetailCourseComponent } from './course/detail-course/detail-course.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { SetcourseComponent } from './course/setcourse/setcourse.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllGradeComponent } from './grade/all-grade/all-grade.component';
import { GradeComponent } from './grade/grade.component';
import { HeadmasterComponent } from './headmaster.component';
import { AddHometeacherComponent } from './homeroom/add-hometeacher/add-hometeacher.component';
import { AllHomeroomComponent } from './homeroom/all-homeroom/all-homeroom.component';
import { DetailHomeroomComponent } from './homeroom/detail-homeroom/detail-homeroom.component';
import { ScoreHomeroomComponent } from './homeroom/detail-homeroom/score-homeroom/score-homeroom.component';
import { EditHomeroomComponent } from './homeroom/edit-homeroom/edit-homeroom.component';
import { HomeroomComponent } from './homeroom/homeroom.component';
import { AllParentComponent } from './parent/all-parent/all-parent.component';
import { CreateParentComponent } from './parent/create-parent/create-parent.component';
import { DetailParentComponent } from './parent/detail-parent/detail-parent.component';
import { EditParentsComponent } from './parent/edit-parents/edit-parents.component';
import { ParentComponent } from './parent/parent.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AddNewscoreComponent } from './score/add-newscore/add-newscore.component';
import { AllScoreComponent } from './score/all-score/all-score.component';
import { DetailScoreComponent } from './score/detail-score/detail-score.component';
import { ScoreComponent } from './score/score.component';
import { AllStudentComponent } from './student/all-student/all-student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { DetailStudentComponent } from './student/detail-student/detail-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { StudentRaportComponent } from './student/raport/student-raport.component';
import { StudentComponent } from './student/student.component';
import { AllTeacherComponent } from './teacher/all-teacher/all-teacher.component';
import { CreateTeacherComponent } from './teacher/create-teacher/create-teacher.component';
import { DetailTeacherComponent } from './teacher/detail-teacher/detail-teacher.component';
import { EditTeacherComponent } from './teacher/edit-teacher/edit-teacher.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  { path: '', component: HeadmasterComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'teacher',
    component: TeacherComponent,
    children: [
      {
        path: '',
        redirectTo: '/headmaster/teacher/allTeacher',
        pathMatch: 'full',
      },
      { path: 'allTeacher', component: AllTeacherComponent },
      { path: 'create', component: CreateTeacherComponent },
      { path: 'edit/:id', component: EditTeacherComponent },
      { path: ':id', component: DetailTeacherComponent },
    ],
  },
  {
    path: 'class',
    component: ClassComponent,
    children: [
      { path: '', redirectTo: '/headmaster/class/allClass', pathMatch: 'full' },
      { path: 'allClass', component: AllClassComponent },
      { path: 'create', component: CreateClassComponent },
      { path: 'edit/:id', component: EditClassComponent },
      { path: ':id', component: DetailClassComponent },
    ],
  },
  {
    path: 'course',
    component: CourseComponent,
    children: [
      {
        path: '',
        redirectTo: '/headmaster/course/allCourse',
        pathMatch: 'full',
      },
      { path: 'allCourse', component: AllCourseComponent },
      { path: 'create', component: CreateCourseComponent },
      { path: 'edit/:id', component: EditCourseComponent },
      { path: ':id', component: DetailCourseComponent },
      { path: 'set/course', component: SetcourseComponent },
    ],
  },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: '',
        redirectTo: '/headmaster/student/allStudent',
        pathMatch: 'full',
      },
      { path: 'allStudent', component: AllStudentComponent },
      { path: 'create', component: CreateStudentComponent },
      { path: 'edit/:id', component: EditStudentComponent },
      { path: 'raport', component: StudentRaportComponent },
      { path: ':id', component: DetailStudentComponent },
    ],
  },
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {
        path: '',
        redirectTo: '/headmaster/parent/allParent',
        pathMatch: 'full',
      },
      { path: 'allParent', component: AllParentComponent },
      { path: 'create', component: CreateParentComponent },
      { path: ':id', component: DetailParentComponent },
      { path: 'edit/:id', component: EditParentsComponent },
    ],
  },
  {
    path: 'homeroom',
    component: HomeroomComponent,
    children: [
      {
        path: '',
        redirectTo: '/headmaster/homeroom/allHomeroom',
        pathMatch: 'full',
      },
      { path: 'allHomeroom', component: AllHomeroomComponent },
      { path: ':id', component: DetailHomeroomComponent },
      { path: ':id/:id', component: ScoreHomeroomComponent },
      { path: 'set/from-teacher/set', component: AddHometeacherComponent },
      { path: 'edit/homeroom/:id', component: EditHomeroomComponent },
    ],
  },
  {
    path: 'score',
    component: ScoreComponent,
    children: [
      { path: '', redirectTo: '/headmaster/score/allScore', pathMatch: 'full' },
      { path: 'allScore', component: AllScoreComponent },
      { path: 'detail-student/:id', component: DetailScoreComponent },
      { path: 'addScore', component: AddNewscoreComponent },
    ],
  },
  {
    path: 'grade',
    component: GradeComponent,
    children: [
      { path: '', redirectTo: '/headmaster/grade/allGrade', pathMatch: 'full' },
      { path: 'allGrade', component: AllGradeComponent },
    ],
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadmasterRoutingModule {}
