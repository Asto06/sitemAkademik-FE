import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SidebarStudentComponent } from './sidebar-student/sidebar-student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { ReportComponent } from './report/report.component';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [
    StudentComponent,
    SidebarStudentComponent,
    DashboardComponent,
    HeaderComponent,
    ScheduleComponent,
    ReportComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    AngularMaterialModule,
    FullCalendarModule,
   
  ],
  exports: [
    HeaderComponent,
    SidebarStudentComponent,
  ]
})
export class StudentModule { }
