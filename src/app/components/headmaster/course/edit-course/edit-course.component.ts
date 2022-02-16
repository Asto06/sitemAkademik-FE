import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseData } from 'src/app/interface/ICourse';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  spinner = false;
  editFormCourse!: FormGroup;
  idCourse: any;
  courses: CourseData[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formCourse: FormBuilder,
    private headmasterService: HeadmasterService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idCourse = params['id'];
    });
    this._spinner();
    this.getValueCourse();
    this.editCourseFormInit();
    this.getCourses();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  get courseFormControl() {
    return this.editFormCourse.controls;
  }

  public getValueCourse() {
    this.headmasterService
      .getSpesificCourse(this.idCourse)
      .subscribe((res: any) => {
        this.courseFormControl['course'].setValue(res.body.course);
      });
  }

  private editCourseFormInit() {
    this.editFormCourse = this.formCourse.group({
      course: ['', Validators.required],
    });
  }

  private getCourses() {
    this.headmasterService.getCourse().subscribe((res: any) => {
      this.courses = res.body;
    });
  }

  public onSave() {
    const course: CourseData = {
      course: this.courseFormControl['course'].value,
    };
    this.headmasterService.editCourse(this.idCourse, course.course).subscribe(
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
