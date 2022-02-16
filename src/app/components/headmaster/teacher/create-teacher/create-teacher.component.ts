import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassData } from 'src/app/interface/IClass';
import { CourseData } from 'src/app/interface/ICourse';
import { TeacherData } from 'src/app/interface/ITeacher';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css'],
})
export class CreateTeacherComponent implements OnInit {
  createFormTeacher!: FormGroup;
  createTeacher: TeacherData[] = [];
  courses: CourseData[] = [];
  class: ClassData[] = [];
  spinner = false;
  constructor(
    private formTeacher: FormBuilder,
    private headmasterService: HeadmasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._spinner();
    this.createTeacherFormInit();
    this.getCourses();
    this.getClasses();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  private createTeacherFormInit() {
    this.createFormTeacher = this.formTeacher.group({
      fullName: ['', Validators.required],
      emailSend: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      course: ['', Validators.required],
      teachClass: ['', Validators.required],
    });
  }

  get teacherForm() {
    return this.createFormTeacher.controls;
  }

  public onSubmit() {
    const teacher: TeacherData = {
      fullName: this.teacherForm['fullName'].value,
      emailSend: this.teacherForm['emailSend'].value,
      birthDate: this.teacherForm['birthDate'].value,
      course: this.teacherForm['course'].value,
      teachClass: this.teacherForm['teachClass'].value,
    };
    this.spinner = true;
    this.headmasterService
      .createTeacher(
        teacher.fullName,
        teacher.emailSend,
        teacher.birthDate,
        teacher.course,
        teacher.teachClass
      )
      .subscribe(
        (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Create Teacher Success',
            text: 'Headmaster to Create Teacher Successfull',
            showConfirmButton: true,
            timer: 3000
          });
          this.router.navigate(['/headmaster/teacher']);
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            showConfirmButton: false,
            timer: 3000,
          });
        },
        () => {
          this.spinner = false;
        }
      );
  }

  public getCourses() {
    this.headmasterService.getCourse().subscribe((res: any) => {
      this.courses = res.body;
    })
  }

  public getClasses() {
    this.headmasterService.getClass().subscribe((res: any) => {
      this.class = res.body;
    })
  }

  public onCancel() {
    this.router.navigate(['/headmaster/teacher']);
  }
}
