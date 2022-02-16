import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherData } from 'src/app/interface/ITeacher';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  idTeacher: any;
  teacher: TeacherData[] = [];
  isLoggedIn = false;
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onAuth();
    this.getIdTeacher();
  }

  onAuth() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  getIdTeacher() {
    this.idTeacher = this.tokenStorageService.getUser()!;

    console.log(this.idTeacher);
    // this.teacherService
    //   .getTeacher(this.idTeacher)
    //   .subscribe((res: any) => {
    //     this.teacher = res;
    // });
  }
}
