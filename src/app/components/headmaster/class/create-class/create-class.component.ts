import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassData } from 'src/app/interface/IClass';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css'],
})
export class CreateClassComponent implements OnInit {
  createFormClass!: FormGroup;
  createClass: ClassData[] = [];
  spinner = false;

  constructor(
    private formClass: FormBuilder,
    private headmasterService: HeadmasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._spinner();
    this.createClassFormInit();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  private createClassFormInit() {
    this.createFormClass = this.formClass.group({
      className: ['', Validators.required],
      yearAcademic: ['', Validators.required],
      semester: ['', Validators.required],
    });
  }

  get classForm() {
    return this.createFormClass.controls;
  }

  public onSubmit() {
    const classes: ClassData = {
      className: this.classForm['className'].value,
      yearAcademic: this.classForm['yearAcademic'].value,
      semester: this.classForm['semester'].value,
    };
    this.headmasterService
      .createClass(classes.className, classes.yearAcademic, classes.semester)
      .subscribe(
        (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Create Class Success',
            text: 'Headmaster to Create Class Successfull',
            showConfirmButton: true,
            timer: 3000,
          });
          this.router.navigate(['/headmaster/class']);
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

  public onCancel() {
    this.router.navigate(['/headmaster/class']);
  }
}
