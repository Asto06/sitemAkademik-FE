import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent,
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./components/teacher/teacher.module').then(
        (m) => m.TeacherModule
      ),
    // canActivate: [AuthGuard],
  },
  {
    path: 'headmaster',
    loadChildren: () =>
      import('./components/headmaster/headmaster.module').then(
        (m) => m.HeadmasterModule
      ),
    // canActivate: [AuthGuard],
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./components/student/student.module').then(
        (m) => m.StudentModule
      ),
    // canActivate: [AuthGuard],
  },
  {
    path: 'parent',
    loadChildren: () =>
      import('./components/parent/parent.module').then((m) => m.ParentModule),
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
