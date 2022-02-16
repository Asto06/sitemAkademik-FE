import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { student } from 'src/app/interface/IScore';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-detail-score',
  templateUrl: './detail-score.component.html',
  styleUrls: ['./detail-score.component.css'],
})
export class DetailScoreComponent implements OnInit {
  idStudent: any;
  students!: student;

  constructor(
    private headmasterService: HeadmasterService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idStudent = params['id'];
    });
    this.getSpesificScore();
  }

  public getSpesificScore() {
    this.headmasterService
      .getSpesificScore(this.idStudent)
      .subscribe((res: any) => {
        this.students = res.body;
      });
  }

  public onBack() {
    this.location.back();
  }
}
