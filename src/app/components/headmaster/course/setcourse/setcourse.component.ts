import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseData, setCourse } from 'src/app/interface/ICourse';
import { CourseTeacher } from 'src/app/interface/ITeacher';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-setcourse',
  templateUrl: './setcourse.component.html',
  styleUrls: ['./setcourse.component.css'],
})
export class SetcourseComponent implements OnInit {
  spinner = false;
  updateCourseForm!: FormGroup;
  courses: CourseData[] = [];
  teachers: CourseTeacher[] = [];

  constructor(
    private router: Router,
    private formCourse: FormBuilder,
    private headmasterService: HeadmasterService
  ) {}

  ngOnInit(): void {
    this._spinner();
    this.getCourses();
    this.updateCourseFormInit();
    this.getTeachers();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public getCourses() {
    this.headmasterService.getCourse().subscribe((res: any) => {
      this.courses = res.body;
    });
  }

  public getTeachers() {
    this.headmasterService.getTeacher().subscribe((res: any) => {
      this.teachers = res.body;
    });
  }

  get courseFormControl() {
    return this.updateCourseForm.controls;
  }

  private updateCourseFormInit() {
    this.updateCourseForm = this.formCourse.group({
      teacher: ['', Validators.required],
      courseBefore: ['', Validators.required],
      courseAfter: ['', Validators.required],
    });
  }

  public onSave() {
    const updateData: setCourse = {
      teacher: this.courseFormControl['teacher'].value,
      courseBefore: this.courseFormControl['courseBefore'].value,
      courseAfter: this.courseFormControl['courseAfter'].value,
    };
    this.headmasterService
      .editCourseSpesific(
        updateData.teacher,
        updateData.courseBefore,
        updateData.courseAfter
      )
      .subscribe(
        (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Update Data Course Success',
            text: 'Headmaster to Update Course Data Successfull',
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

  public onBack() {
    this.router.navigate(['/headmaster/course']);
  }
}
