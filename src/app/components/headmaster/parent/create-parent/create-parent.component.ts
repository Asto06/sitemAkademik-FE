import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassData } from 'src/app/interface/IClass';
import { ParentData } from 'src/app/interface/IParent';
import { StudentData } from 'src/app/interface/IStudent';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-create-parent',
  templateUrl: './create-parent.component.html',
  styleUrls: ['./create-parent.component.css'],
})
export class CreateParentComponent implements OnInit {
  spinner = false;
  createFormParent!: FormGroup;

  constructor(
    private formParent: FormBuilder,
    private headmasterService: HeadmasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._spinner();
    this.createParentFormInit();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  private createParentFormInit() {
    this.createFormParent = this.formParent.group({
      emailSend: ['', Validators.required],
      father: ['', Validators.required],
      mother: ['', Validators.required],
      birthDate: ['', Validators.required],
      student: ['', Validators.required],
    });
  }

  get parentFormControl() {
    return this.createFormParent.controls;
  }

  public onSubmit() {
    const parent: ParentData = {
      emailSend: this.parentFormControl['emailSend'].value,
      father: this.parentFormControl['father'].value,
      mother: this.parentFormControl['mother'].value,
      birthDate: this.parentFormControl['birthDate'].value,
      student: this.parentFormControl['student'].value,
    };
    this.headmasterService
      .createParent(
        parent.emailSend,
        parent.father,
        parent.mother,
        parent.birthDate,
        parent.student
      )
      .subscribe(
        (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Create Parent Success',
            text: 'Headmaster to Create Parent Successfull',
            showConfirmButton: true,
            timer: 3000,
          });
          this.router.navigate(['/headmaster/parent']);
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            showConfirmButton: true,
            timer: 3000,
          });
        }
      );
  }

  public onCancel() {
    this.router.navigate(['/headmaster/parent']);
  }
}
