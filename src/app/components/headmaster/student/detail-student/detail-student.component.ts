import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentSpesific } from 'src/app/interface/IStudent';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css'],
})
export class DetailStudentComponent implements OnInit {
  idStudent: any;
  students!: StudentSpesific;
  spinner = false;

  constructor(
    private headmasterService: HeadmasterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idStudent = params['id'];
    });
    this._spinner();
    this.getSpesificStudent();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public getSpesificStudent() {
    this.headmasterService
      .getSpesificStudent(this.idStudent)
      .subscribe((res: any) => {
        this.students = res.body;
      });
  }

  public onBack() {
    this.router.navigate(['/headmaster/student']);
  }
}
