import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { ParentRaportComponent } from './parent-raport/parent-raport.component';
import { ParentScheduleComponent } from './parent-schedule/parent-schedule.component';
import { ParentStudentComponent } from './parent-student/parent-student.component';
import { ParentComponent } from './parent.component';

const routes: Routes = [
  { path: '', redirectTo: '/parent/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ParentDashboardComponent },
  { path: 'profilStudent', component: ParentStudentComponent },
  { path: 'schedule', component: ParentScheduleComponent },
  { path: 'raportStudent', component: ParentRaportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentRoutingModule {}
