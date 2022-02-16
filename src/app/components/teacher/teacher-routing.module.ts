import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddscoreComponent } from './addscore/addscore.component';
import { ClassesComponent } from './classes/classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllgradeStudentComponent } from './grading-student/allgrade-student/allgrade-student.component';
import { GradestudentDetailComponent } from './grading-student/gradestudent-detail/gradestudent-detail.component';
import { GradingStudentComponent } from './grading-student/grading-student.component';
import { SetgradeStudentComponent } from './grading-student/setgrade-student/setgrade-student.component';
import { AllscoreStudentComponent } from './new-score/allscore-student/allscore-student.component';
import { DetailscoreStudentComponent } from './new-score/detailscore-student/detailscore-student.component';
import { ManageScoreComponent } from './new-score/manage-score/manage-score.component';
import { NewScoreComponent } from './new-score/new-score.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScoreComponent } from './score/score.component';
import { YourHomeclassComponent } from './your-homeclass/your-homeclass.component';

const routes: Routes = [
  { path: '', redirectTo: '/teacher/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'score/add-score', component: AddscoreComponent },
  { path: 'class', component: ClassesComponent },
  { path: 'class/class-detail', component: ClassesComponent },
  { path: 'schedule', component: ScheduleComponent },
  {
    path: 'newScore',
    component: NewScoreComponent,
    children: [
      {
        path: '',
        redirectTo: '/teacher/newScore/allScore-student',
        pathMatch: 'full',
      },
      { path: 'allScore-student', component: AllscoreStudentComponent },
      {
        path: 'detailScore-student/:id',
        component: DetailscoreStudentComponent,
      },
      { path: 'detailScore-student/:id/:id', component: ManageScoreComponent },
    ],
  },
  { path: 'homeClass', component: YourHomeclassComponent },
  {
    path: 'gradeStudent',
    component: GradingStudentComponent,
    children: [
      {
        path: '',
        redirectTo: '/teacher/gradeStudent/allGrade',
        pathMatch: 'full',
      },
      { path: 'allGrade', component: AllgradeStudentComponent },
      { path: ':id', component: GradestudentDetailComponent },
      { path: 'allGrade/setGrade', component: SetgradeStudentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
