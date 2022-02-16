import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadmasterRoutingModule } from './headmaster-routing.module';
import { HeadmasterComponent } from './headmaster.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StudentRaportComponent } from './student/raport/student-raport.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ClassComponent } from './class/class.component';
import { CreateClassComponent } from './class/create-class/create-class.component';
import { EditClassComponent } from './class/edit-class/edit-class.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllClassComponent } from './class/all-class/all-class.component';
import { CourseComponent } from './course/course.component';
import { CreateCourseComponent } from './course/create-course/create-course.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { AllCourseComponent } from './course/all-course/all-course.component';
import { AllTeacherComponent } from './teacher/all-teacher/all-teacher.component';
import { CreateTeacherComponent } from './teacher/create-teacher/create-teacher.component';
import { EditTeacherComponent } from './teacher/edit-teacher/edit-teacher.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AllStudentComponent } from './student/all-student/all-student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { StudentComponent } from './student/student.component';
import { DetailStudentComponent } from './student/detail-student/detail-student.component';
import { DetailTeacherComponent } from './teacher/detail-teacher/detail-teacher.component';
import { DetailClassComponent } from './class/detail-class/detail-class.component';
import { DetailCourseComponent } from './course/detail-course/detail-course.component';
import { SetcourseComponent } from './course/setcourse/setcourse.component';
import { ParentComponent } from './parent/parent.component';
import { AllParentComponent } from './parent/all-parent/all-parent.component';
import { CreateParentComponent } from './parent/create-parent/create-parent.component';
import { DetailParentComponent } from './parent/detail-parent/detail-parent.component';
import { EditParentsComponent } from './parent/edit-parents/edit-parents.component';
import { HomeroomComponent } from './homeroom/homeroom.component';
import { AllHomeroomComponent } from './homeroom/all-homeroom/all-homeroom.component';
import { DetailHomeroomComponent } from './homeroom/detail-homeroom/detail-homeroom.component';
import { ScoreHomeroomComponent } from './homeroom/detail-homeroom/score-homeroom/score-homeroom.component';
import { AddHometeacherComponent } from './homeroom/add-hometeacher/add-hometeacher.component';
import { EditHomeroomComponent } from './homeroom/edit-homeroom/edit-homeroom.component';
import { ScoreComponent } from './score/score.component';
import { AllScoreComponent } from './score/all-score/all-score.component';
import { DetailScoreComponent } from './score/detail-score/detail-score.component';
import { AddNewscoreComponent } from './score/add-newscore/add-newscore.component';
import { GradeComponent } from './grade/grade.component';
import { AllGradeComponent } from './grade/all-grade/all-grade.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    HeadmasterComponent,
    FooterComponent,
    HeaderComponent,
    StudentRaportComponent,
    DashboardComponent,
    SidebarComponent,
    ClassComponent,
    CreateClassComponent,
    EditClassComponent,
    AllClassComponent,
    CourseComponent,
    CreateCourseComponent,
    EditCourseComponent,
    AllCourseComponent,
    AllTeacherComponent,
    CreateTeacherComponent,
    EditTeacherComponent,
    TeacherComponent,
    AllStudentComponent,
    CreateStudentComponent,
    EditStudentComponent,
    StudentRaportComponent,
    StudentComponent,
    DetailStudentComponent,
    DetailTeacherComponent,
    DetailClassComponent,
    DetailCourseComponent,
    SetcourseComponent,
    ParentComponent,
    AllParentComponent,
    CreateParentComponent,
    DetailParentComponent,
    EditParentsComponent,
    HomeroomComponent,
    AllHomeroomComponent,
    DetailHomeroomComponent,
    ScoreHomeroomComponent,
    AddHometeacherComponent,
    EditHomeroomComponent,
    ScoreComponent,
    AllScoreComponent,
    DetailScoreComponent,
    AddNewscoreComponent,
    GradeComponent,
    AllGradeComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    HeadmasterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    FontAwesomeModule,
    FullCalendarModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ]
})
export class HeadmasterModule { }
