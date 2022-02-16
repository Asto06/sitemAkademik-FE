import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassData } from 'src/app/interface/IClass';
import { editStudent } from 'src/app/interface/IStudent';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  spinner = false;
  editStudentForm!: FormGroup;
  idStudent: any;
  classes!: ClassData[];

  constructor(
    private router: Router,
    private headmasterService: HeadmasterService,
    private formStudent: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idStudent = params['id'];
    });
    this._spinner();
    this.editStudentFormInit();
    this.getValueStudent();
    this.getClasses();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public getValueStudent() {
    this.headmasterService
      .getSpesificStudent(this.idStudent)
      .subscribe((res: any) => {
        this.studentFormControls['fullName'].setValue(res.body.fullName);
        this.studentFormControls['email'].setValue(res.body.email);
        this.studentFormControls['birthDate'].setValue(res.body.birthDate);
        this.studentFormControls['classBefore'].setValue(
          res.body.classes.className
        );
      });
  }

  private editStudentFormInit() {
    this.editStudentForm = this.formStudent.group({
      fullName: ['', Validators.required],
      email: [''],
      birthDate: ['', Validators.required],
      classBefore: ['', Validators.required],
      classAfter: ['', Validators.required],
    });
  }

  get studentFormControls() {
    return this.editStudentForm.controls;
  }

  public onSave() {
    const student: editStudent = {
      fullName: this.studentFormControls['fullName'].value,
      birthDate: this.studentFormControls['birthDate'].value,
      classBefore: this.studentFormControls['classBefore'].value,
      classAfter: this.studentFormControls['classAfter'].value,
    };
    this.headmasterService
      .editStudent(
        this.idStudent,
        student.fullName,
        student.birthDate,
        student.classBefore,
        student.classAfter
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
          this.router.navigate(['/headmaster/student']);
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

  public getClasses() {
    this.headmasterService.getClass().subscribe((res: any) => {
      this.classes = res.body;
    })
  }

  public onBack() {
    this.router.navigate(['/headmaster/student']);
  }
}
