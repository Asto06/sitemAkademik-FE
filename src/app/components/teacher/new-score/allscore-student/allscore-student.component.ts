import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { classTeacher } from 'src/app/interface/IClass';
import { TeacherClassSpesific } from 'src/app/interface/ITeacher';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { TeacherService } from '../../teacher.service';

@Component({
  selector: 'app-allscore-student',
  templateUrl: './allscore-student.component.html',
  styleUrls: ['./allscore-student.component.css'],
})
export class AllscoreStudentComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faEraser = faEraser;
  classes!: TeacherClassSpesific;
  classStudent: classTeacher = {};
  idteacher: any;
  selectedStudent: any;

  constructor(
    private tokenStorage: TokenStorageService,
    private teacherService: TeacherService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getClassesTeacher();
    this.getStudentClass();
  }

  public getClassesTeacher() {
    this.idteacher = this.tokenStorage.getUser();
    this.teacherService
      .getSpesificTeacher(this.idteacher.user.id)
      .subscribe((res: any) => {
        this.classes = res.body;
      });
  }

  public getStudentClass() {
    this.teacherService
      .getClassTeacher(this.idteacher.user.teachClass[0]._id)
      .subscribe((res: any) => {
        this.classStudent = res.body;
      });
  }

  public onDetail(classStudent: classTeacher) {
    this.selectedStudent = classStudent;
    this.router.navigate([
      '/teacher/newScore/detailScore-student/' + classStudent._id,
    ]);
  }
}
