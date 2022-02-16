import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassData, editClass } from 'src/app/interface/IClass';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css'],
})
export class EditClassComponent implements OnInit {
  spinner = false;
  editClassForm!: FormGroup;
  idClass: any;
  classes!: ClassData[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formClass: FormBuilder,
    private headmasterService: HeadmasterService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idClass = params['id'];
    });
    this._spinner();
    this.getEditClass();
    this.editClassFormInit();
    this.getClasses();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  get classFormControl() {
    return this.editClassForm.controls;
  }

  public getEditClass() {
    this.headmasterService
      .getSpesificClass(this.idClass)
      .subscribe((res: any) => {
        this.classFormControl['className'].setValue(res.body.className);
        this.classFormControl['semester'].setValue(res.body.semester);
        this.classFormControl['yearAcademic'].setValue(res.body.yearAcademic);
      });
  }

  private editClassFormInit() {
    this.editClassForm = this.formClass.group({
      className: ['', Validators.required],
      semester: ['', Validators.required],
      yearAcademic: ['', Validators.required],
    });
  }

  private getClasses() {
    this.headmasterService.getClass().subscribe((res: any) => {
      this.classes = res.body;
    });
  }

  public onSave() {
    const classes: editClass = {
      className: this.classFormControl['className'].value,
      semester: this.classFormControl['semester'].value,
      yearAcademic: this.classFormControl['yearAcademic'].value,
    };
    this.headmasterService
      .editClass(
        this.idClass,
        classes.className,
        classes.semester,
        classes.yearAcademic
      )
      .subscribe(
        (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Update Data Class Success',
            text: 'Headmaster to Update Class Data Successfull',
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
        }
      );
  }

  public onBack() {
    this.router.navigate(['/headmaster/class']);
  }
}
