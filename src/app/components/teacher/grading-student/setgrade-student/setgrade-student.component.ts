import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { classTeacher } from 'src/app/interface/IClass';
import { grade, setGrade } from 'src/app/interface/IGrade';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import Swal from 'sweetalert2';
import { TeacherService } from '../../teacher.service';

@Component({
  selector: 'app-setgrade-student',
  templateUrl: './setgrade-student.component.html',
  styleUrls: ['./setgrade-student.component.css'],
})
export class SetgradeStudentComponent implements OnInit {
  spinner = false;
  setGradeForm!: FormGroup;
  idTeacher: any;
  student!: classTeacher;
  grades!: grade[];

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this._spinner();
    this.gradeFormInit();
    this.getStudentInClass();
    this.getGrade();
  }

  public gradeFormInit() {
    this.setGradeForm = this.formBuilder.group({
      grade: ['', Validators.required],
      student: ['', Validators.required],
    });
  }

  get gradeFormControls() {
    return this.setGradeForm.controls;
  }

  public getStudentInClass() {
    this.idTeacher = this.tokenStorage.getUser();
    const studentClass = this.idTeacher.user.teachClass[0]._id;
    this.teacherService.getClassTeacher(studentClass).subscribe((res: any) => {
      this.student = res.body;
    });
  }

  public getGrade() {
    this.teacherService.getAllGrade().subscribe((res: any) => {
      this.grades = res.body;
    });
  }

  public onSave() {
    const grade: setGrade = {
      grade: this.gradeFormControls['grade'].value,
      student: this.gradeFormControls['student'].value,
    };
    this.teacherService.setGradeStudent(grade.grade, grade.student).subscribe(
      (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Set Grade For Student Success',
          text: 'Teacher to Set Grade Successfull',
          showConfirmButton: true,
          timer: 3000,
        });
        this.router.navigate(['/teacher/gradeStudent']);
      },
      () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          showConfirmButton: false,
          timer: 3000,
        });
      }
    );
  }

  public onBack() {}

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }
}
