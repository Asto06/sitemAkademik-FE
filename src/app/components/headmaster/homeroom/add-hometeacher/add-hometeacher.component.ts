import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassData } from 'src/app/interface/IClass';
import { HomeroomData } from 'src/app/interface/IHomeroom';
import { CourseTeacher } from 'src/app/interface/ITeacher';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-add-hometeacher',
  templateUrl: './add-hometeacher.component.html',
  styleUrls: ['./add-hometeacher.component.css'],
})
export class AddHometeacherComponent implements OnInit {
  spinner = false;
  addTeacherHome!: FormGroup;
  teachers: CourseTeacher[] = [];
  classes: ClassData[] = [];

  constructor(
    private router: Router,
    private headmasterService: HeadmasterService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this._spinner();
    this.editHomeroomFormInit();
    this.getTeachers();
    this.getClasses();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  private editHomeroomFormInit() {
    this.addTeacherHome = this.formBuilder.group({
      homeroomName: ['', Validators.required],
      className: ['', Validators.required],
    });
  }

  get homeroomFormControls() {
    return this.addTeacherHome.controls;
  }

  public getTeachers() {
    this.headmasterService.getTeacher().subscribe((res: any) => {
      this.teachers = res.body;
    });
  }

  public getClasses() {
    this.headmasterService.getClass().subscribe((res: any) => {
      this.classes = res.body;
    });
  }

  public onSave() {
    const homeroom: HomeroomData = {
      homeroomName: this.homeroomFormControls['homeroomName'].value,
      className: this.homeroomFormControls['className'].value,
    };
    this.headmasterService
      .setTeacherForHome(homeroom.homeroomName, homeroom.className)
      .subscribe(
        (res) => {
          console.log(res);
          Swal.fire({
            icon: 'success',
            title: 'Set Teacher For Homeroom Teacher Success',
            text: 'Headmaster to Set Homeroom Teacher Data Successfull',
            showConfirmButton: true,
            timer: 3000,
          });
          this.router.navigate(['/headmaster/homeroom']);
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
    this.router.navigate(['/headmaster/homeroom']);
  }
}
