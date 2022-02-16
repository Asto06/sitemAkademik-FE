import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassData } from 'src/app/interface/IClass';
import { CourseData } from 'src/app/interface/ICourse';
import { CourseTeacher, editTeacher } from 'src/app/interface/ITeacher';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css'],
})
export class EditTeacherComponent implements OnInit {
  spinner = false;
  editTeacherForm!: FormGroup;
  teacher: CourseTeacher = {};
  idTeacher: any;
  courses!: CourseData[];
  classes!: ClassData[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formTeacher: FormBuilder,
    private headmasterService: HeadmasterService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idTeacher = params['id'];
    });
    this._spinner();
    this.getEditTeacher();
    this.editTeacherFormInit();
    this.getCourses();
    this.getClass();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public getEditTeacher() {
    this.headmasterService
      .getSpesificTeacher(this.idTeacher)
      .subscribe((res: any) => {
        this.teacherFormControl['fullName'].setValue(res.body.fullName);
        this.teacherFormControl['email'].setValue(res.body.email);
        this.teacherFormControl['birthDate'].setValue(res.body.birthDate);
        this.teacherFormControl['course'].setValue(res.body.course[0].course);
        this.teacherFormControl['teachClass'].setValue(res.body.teachClass[0].className);
      });
  }

  private editTeacherFormInit() {
    this.editTeacherForm = this.formTeacher.group({
      fullName: ['', Validators.required],
      email: [''],
      birthDate: ['', Validators.required],
      course: ['', Validators.required],
      teachClass: ['', Validators.required],
    });
  }

  get teacherFormControl() {
    return this.editTeacherForm.controls;
  }

  public onSave() {
    const teacher: editTeacher = {
      fullName: this.teacherFormControl['fullName'].value,
      birthDate: this.teacherFormControl['birthDate'].value,
      course: this.teacherFormControl['course'].value,
      teachClass: this.teacherFormControl['teachClass'].value,
    };
    this.headmasterService
      .editTeacher(
        this.idTeacher,
        teacher.fullName,
        teacher.birthDate,
        teacher.course,
        teacher.teachClass
      )
      .subscribe(
        (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Update Data Teacher Success',
            text: 'Headmaster to Update Teacher Data Successfull',
            showConfirmButton: true,
            timer: 3000,
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
        }
      );
  }

  public getCourses() {
    this.headmasterService.getCourse().subscribe((res: any) => {
      this.courses = res.body;
    });
  }

  private getClass() {
    this.headmasterService.getClass().subscribe((res: any) => {
      this.classes = res.body;
    });
  }

  public onBack() {
    this.router.navigate(['/headmaster/teacher']);
  }
}
