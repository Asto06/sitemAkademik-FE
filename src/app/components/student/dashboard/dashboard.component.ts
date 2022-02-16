import { Component, OnInit } from '@angular/core';
import { studentGetData } from 'src/app/interface/IStudent';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  idStudent: any;
  students!: studentGetData;

  constructor(
    private tokenStorage: TokenStorageService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  public getStudents() {
    this.idStudent = this.tokenStorage.getUser();
    const _idStudent = this.idStudent.user.id;
    this.studentService.getStudentData(_idStudent).subscribe((res: any) => {
      this.students = res.body;
      console.log(this.students);
    });
  }
}
