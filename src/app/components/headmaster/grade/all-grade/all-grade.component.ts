import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { ClassData } from 'src/app/interface/IClass';
import { GradeData } from 'src/app/interface/IGrade';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-all-grade',
  templateUrl: './all-grade.component.html',
  styleUrls: ['./all-grade.component.css'],
})
export class AllGradeComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faEraser = faEraser;
  searchingGrade!: FormGroup;
  grades: GradeData = {};
  classes!: ClassData[];

  constructor(
    private router: Router,
    private headmasterService: HeadmasterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchingGradeFormInit();
    this.getClasses();
  }

  get searchingGradeControls() {
    return this.searchingGrade.controls;
  }

  public searchingGradeFormInit() {
    this.searchingGrade = this.formBuilder.group({
      className: ['', Validators.required],
    });
  }

  public onSearch() {
    const grade: GradeData = {
      className: this.searchingGradeControls['className'].value,
    };
    this.headmasterService
      .getGradeStudent(grade.className!)
      .subscribe((res: any) => {
        if (res.body[0].student.length === 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops... Sory',
            text: 'Student Data In This Class is Null :(',
            showConfirmButton: false,
            timer: 5000,
          });
        } else {
          this.grades = res.body[0];
        }
      });
  }

  public getClasses() {
    this.headmasterService.getClass().subscribe((res: any) => {
      this.classes = res.body;
    });
  }

  public onAddGrade() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'This Feature Not For You! Sory.. :(',
      showConfirmButton: false,
      timer: 5000,
    });
  }
}
