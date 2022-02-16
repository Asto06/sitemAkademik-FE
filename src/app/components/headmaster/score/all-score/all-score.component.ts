import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { ClassData } from 'src/app/interface/IClass';
import { ScoreData } from 'src/app/interface/IScore';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-all-score',
  templateUrl: './all-score.component.html',
  styleUrls: ['./all-score.component.css'],
})
export class AllScoreComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faEraser = faEraser;
  searchingForm!: FormGroup;
  classes!: ClassData[];
  scores: ScoreData = {};
  selectedStudent: any;

  constructor(
    private router: Router,
    private headmasterService: HeadmasterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchingFormInit();
    this.getClasses();
  }

  get searchingFormControls() {
    return this.searchingForm.controls;
  }

  public searchingFormInit() {
    this.searchingForm = this.formBuilder.group({
      className: ['', Validators.required],
    });
  }

  public onSearch() {
    const searchData: ScoreData = {
      className: this.searchingFormControls['className'].value,
    };
    this.headmasterService
      .getScoreStudent(searchData.className!)
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
          this.scores = res.body[0];
        }
      });
  }

  public onAddScore() {
    this.router.navigate(['/headmaster/score/addScore']);
  }

  public getClasses() {
    this.headmasterService.getClass().subscribe((res: any) => {
      this.classes = res.body;
    });
  }

  public onDetail(scores: ScoreData) {
    this.selectedStudent = scores._id;
    this.router.navigate(['/headmaster/score/detail-student/' + scores._id]);
  }
}
