import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { studentScore } from 'src/app/interface/IScore';
import { TeacherService } from '../../teacher.service';

@Component({
  selector: 'app-manage-score',
  templateUrl: './manage-score.component.html',
  styleUrls: ['./manage-score.component.css'],
})
export class ManageScoreComponent implements OnInit {
  spinner = false;
  manageScoreForm!: FormGroup;
  idScore: any;
  score!: studentScore;

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idScore = params['id'];
      console.log(this.idScore);
    });
    this._spinner();
    this.manageScoreFormInit();
    this.setValueFormScore()
  }

  public setValueFormScore() {
    this.teacherService.getScoreStudentSpesific(this.idScore).subscribe((res: any) => {
      this.manageScoreFormControls['course'].setValue(res.body.course.course)
      this.manageScoreFormControls['dailyScore'].setValue(res.body.dailyScore)
      this.manageScoreFormControls['midtest'].setValue(res.body.midtest)
      this.manageScoreFormControls['finaltest'].setValue(res.body.finaltest)
      this.manageScoreFormControls['resultScore'].setValue(res.body.resultScore)
    })
  }

  public manageScoreFormInit() {
    this.manageScoreForm = this.formBuilder.group({
      course: ['', Validators.required],
      dailyScore: [
        '',
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      midtest: [
        '',
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      finaltest: [
        '',
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      resultScore: [
        '',
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
    });
  }

  get manageScoreFormControls() {
    return this.manageScoreForm.controls;
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public onBack() {
    this.location.back();
  }
}
