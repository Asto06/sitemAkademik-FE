import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { teacherSpesific } from 'src/app/interface/ITeacher';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-detail-teacher',
  templateUrl: './detail-teacher.component.html',
  styleUrls: ['./detail-teacher.component.css'],
})
export class DetailTeacherComponent implements OnInit {
  idTeacher: any;
  teachers!: teacherSpesific;
  spinner = false;

  constructor(
    private headmasterService: HeadmasterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idTeacher = params['id'];
    });
    this.getSpesificTeacher();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public getSpesificTeacher() {
    this.headmasterService
      .getSpesificTeacher(this.idTeacher)
      .subscribe((res: any) => {
        this._spinner();
        this.teachers = res.body;
      });
  }

  public onBack() {
    this.router.navigate(['/headmaster/teacher']);
  }
}
