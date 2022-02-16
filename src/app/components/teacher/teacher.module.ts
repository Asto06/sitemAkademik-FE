import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { AddscoreComponent } from './addscore/addscore.component';
import { ScoreComponent } from './score/score.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { TeachersidebarComponent } from './teachersidebar/teachersidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassdetailComponent } from './classdetail/classdetail.component';
import { HeaderComponent } from './header/header.component';
import { ScheduleComponent } from './schedule/schedule.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NewScoreComponent } from './new-score/new-score.component';
import { AllscoreStudentComponent } from './new-score/allscore-student/allscore-student.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailscoreStudentComponent } from './new-score/detailscore-student/detailscore-student.component';
import { ManageScoreComponent } from './new-score/manage-score/manage-score.component';
import { YourHomeclassComponent } from './your-homeclass/your-homeclass.component';
import { GradingStudentComponent } from './grading-student/grading-student.component';
import { AllgradeStudentComponent } from './grading-student/allgrade-student/allgrade-student.component';
import { GradestudentDetailComponent } from './grading-student/gradestudent-detail/gradestudent-detail.component';
import { SetgradeStudentComponent } from './grading-student/setgrade-student/setgrade-student.component';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [
    TeacherComponent,
    ScoreComponent,
    AddscoreComponent,
    TeachersidebarComponent,
    DashboardComponent,
    ClassesComponent,
    ClassdetailComponent,
    HeaderComponent,
    ScheduleComponent,
    NewScoreComponent,
    AllscoreStudentComponent,
    DetailscoreStudentComponent,
    ManageScoreComponent,
    YourHomeclassComponent,
    GradingStudentComponent,
    AllgradeStudentComponent,
    GradestudentDetailComponent,
    SetgradeStudentComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    FullCalendarModule,
    FontAwesomeModule
  ]
})
export class TeacherModule { }
