import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { studentSpec } from 'src/app/interface/IStudent';
import { TeacherService } from '../../teacher.service';

@Component({
  selector: 'app-gradestudent-detail',
  templateUrl: './gradestudent-detail.component.html',
  styleUrls: ['./gradestudent-detail.component.css'],
})
export class GradestudentDetailComponent implements OnInit {
  idStudent: any;
  students!: studentSpec;

  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idStudent = params['id'];
    });
    this.getStudentSpec();
  }

  public getStudentSpec() {
    this.teacherService
      .getSpesificStudent(this.idStudent)
      .subscribe((res: any) => {
        this.students = res.body;
      });
  }

  public onBack() {
    this.router.navigate(['/teacher/gradeStudent']);
  }
}
