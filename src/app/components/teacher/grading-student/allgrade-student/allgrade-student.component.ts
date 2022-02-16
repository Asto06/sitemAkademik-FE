import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { classTeacher } from 'src/app/interface/IClass';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TeacherService } from '../../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allgrade-student',
  templateUrl: './allgrade-student.component.html',
  styleUrls: ['./allgrade-student.component.css'],
})
export class AllgradeStudentComponent implements OnInit {
  faSearch = faSearch;
  idTecher: any;
  student: classTeacher = {};
  selectedStudent: any;

  constructor(
    private tokenStorage: TokenStorageService,
    private teacherService: TeacherService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getGradeStudent();
  }

  public getGradeStudent() {
    this.idTecher = this.tokenStorage.getUser();
    const idClass = this.idTecher.user.teachClass[0]._id;
    this.teacherService.getClassTeacher(idClass).subscribe((res: any) => {
      this.student = res.body;
    });
  }

  public onDetail(student: any) {
    this.selectedStudent = student._id;
    this.router.navigate(['/teacher/gradeStudent/' + this.selectedStudent]);
  }

  public onSetGrade() {
    this.router.navigate(['/teacher/gradeStudent/allGrade/setGrade']);
  }
}
