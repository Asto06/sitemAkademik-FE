import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseData } from 'src/app/interface/ICourse';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit {
  createFormCourse!: FormGroup;
  spinner = false;

  constructor(
    private formCourse: FormBuilder,
    private router: Router,
    private headmasterService: HeadmasterService
  ) {}

  ngOnInit(): void {
    this._spinner();
    this.createCourseFormInit();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  private createCourseFormInit() {
    this.createFormCourse = this.formCourse.group({
      course: ['', Validators.required],
    });
  }

  get formCourseControls() {
    return this.createFormCourse.controls;
  }

  public onSubmit() {
    const course: CourseData = {
      course: this.formCourseControls['course'].value,
    };
    this.headmasterService.createCourse(course.course).subscribe(
      (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Create Data Course Success',
          text: 'Headmaster to Create Course Data Successfull',
          showConfirmButton: true,
          timer: 3000,
        });
        this.router.navigate(['/headmaster/course']);
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

  public onCancel() {
    this.router.navigate(['/headmaster/course']);
  }
}
