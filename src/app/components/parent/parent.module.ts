import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent.component';
import { ParentHeaderComponent } from './parent-header/parent-header.component';
import { ParentSidebarComponent } from './parent-sidebar/parent-sidebar.component';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { ParentScheduleComponent } from './parent-schedule/parent-schedule.component';
import { ParentStudentComponent } from './parent-student/parent-student.component';
import { ParentRaportComponent } from './parent-raport/parent-raport.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);


@NgModule({
  declarations: [
    ParentComponent,
    ParentHeaderComponent,
    ParentSidebarComponent,
    ParentDashboardComponent,
    ParentScheduleComponent,
    ParentStudentComponent,
    ParentRaportComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
    FullCalendarModule,
    AngularMaterialModule
  ]
})
export class ParentModule { }
