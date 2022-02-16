import { Component, OnInit } from '@angular/core';
import { classTeacher } from 'src/app/interface/IClass';
import { TeacherClassSpesific } from 'src/app/interface/ITeacher';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  classes!: TeacherClassSpesific;
  classStudent: classTeacher = {};
  idteacher: any;

  constructor(
    private tokenStorage: TokenStorageService,
    private teacherService: TeacherService
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
}
