import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassData } from 'src/app/interface/IClass';
import { editHomeroom } from 'src/app/interface/IHomeroom';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-edit-homeroom',
  templateUrl: './edit-homeroom.component.html',
  styleUrls: ['./edit-homeroom.component.css'],
})
export class EditHomeroomComponent implements OnInit {
  spinner = false;
  editHomeroomForm!: FormGroup;
  idTeacher: any;
  classes: ClassData[] = [];

  constructor(
    private router: Router,
    private headmasterService: HeadmasterService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idTeacher = params['id'];
    });
    this._spinner();
    this.editHomeroomFormInit();
    this.getValueHomeroom();
    this.getClasses();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public getValueHomeroom() {
    this.headmasterService
      .getSpesificHomeroom(this.idTeacher)
      .subscribe((res: any) => {
        this.editHomeFormControls['homeroomName'].setValue(
          res.body.homeroomName.fullName
        );
        this.editHomeFormControls['classBefore'].setValue(
          res.body.className.className
        );
      });
  }

  public editHomeroomFormInit() {
    this.editHomeroomForm = this.formBuilder.group({
      homeroomName: ['', Validators.required],
      classBefore: ['', Validators.required],
      classAfter: ['', Validators.required],
    });
  }

  get editHomeFormControls() {
    return this.editHomeroomForm.controls;
  }

  public onSave() {
    const updateData: editHomeroom = {
      homeroomName: this.editHomeFormControls['homeroomName'].value,
      classBefore: this.editHomeFormControls['classBefore'].value,
      classAfter: this.editHomeFormControls['classAfter'].value,
    };
    this.headmasterService
      .editHomeroom(
        this.idTeacher,
        updateData.homeroomName,
        updateData.classBefore,
        updateData.classAfter
      )
      .subscribe(
        (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Change Homeroom Teacher Success',
            text: 'Headmaster to Change Homeroom Teacher Data Successfull',
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

  public getClasses() {
    this.headmasterService.getClass().subscribe((res: any) => {
      this.classes = res.body;
    });
  }

  public onBack() {
    this.router.navigate(['/headmaster/homeroom']);
  }
}
