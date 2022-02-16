import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { editParent } from 'src/app/interface/IParent';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-edit-parents',
  templateUrl: './edit-parents.component.html',
  styleUrls: ['./edit-parents.component.css'],
})
export class EditParentsComponent implements OnInit {
  spinner = false;
  editParentForm!: FormGroup;
  idParent: any;

  constructor(
    private router: Router,
    private headmasterService: HeadmasterService,
    private formParent: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idParent = params['id'];
      console.log(this.idParent);
    });
    this._spinner();
    this.editParentFormInit();
    this.getValueParent();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public getValueParent() {
    this.headmasterService
      .getSpesificParent(this.idParent)
      .subscribe((res: any) => {
        this.studentParentControl['father'].setValue(res.body.father);
        this.studentParentControl['mother'].setValue(res.body.mother);
        this.studentParentControl['birthDate'].setValue(res.body.birthDate);
        this.studentParentControl['student'].setValue(res.body.student[0].fullName);
      });
  }

  public editParentFormInit() {
    this.editParentForm = this.formParent.group({
      father: ['', Validators.required],
      mother: ['', Validators.required],
      birthDate: ['', Validators.required],
      student: this.formParent.array([this.formParent.control('')]),
    });
  }

  get studentParentControl() {
    return this.editParentForm.controls;
  }

  get student() {
    return this.editParentForm.get('student') as FormArray;
  }

  public onAddStudent() {
    this.student.push(this.formParent.control(''));
  }

  public onSave() {
    const parent: editParent = {
      father: this.studentParentControl['father'].value,
      mother: this.studentParentControl['mother'].value,
      birthDate: this.studentParentControl['birthDate'].value,
      student: this.studentParentControl['student'].value,
    };
    this.headmasterService
      .editParent(
        this.idParent,
        parent.father,
        parent.mother,
        parent.birthDate,
        parent.student
      )
      .subscribe(
        (res) => {
          console.log(res);
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

  public onBack() {
    this.router.navigate(['/headmaster/parrent']);
  }
}
