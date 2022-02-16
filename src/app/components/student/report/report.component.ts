import { Component, OnInit } from '@angular/core';
import { studentGetData } from 'src/app/interface/IStudent';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  idStudent: any;
  students!: studentGetData;

  constructor(
    private tokenStorage: TokenStorageService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.getStudentReport();
  }

  public getStudentReport() {
    this.idStudent = this.tokenStorage.getUser();
    const _idStudent = this.idStudent.user.id;
    this.studentService.getStudentData(_idStudent).subscribe((res: any) => {
      this.students = res.body;
    })
  }
}
