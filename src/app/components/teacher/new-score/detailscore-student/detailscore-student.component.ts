import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { student } from 'src/app/interface/IScore';
import { TeacherService } from '../../teacher.service';
import { faEdit, faEraser, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detailscore-student',
  templateUrl: './detailscore-student.component.html',
  styleUrls: ['./detailscore-student.component.css'],
})
export class DetailscoreStudentComponent implements OnInit {
  faEdit = faEdit;
  idStudent: any;
  students!: student;
  selectedScore: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teacherService: TeacherService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idStudent = params['id'];
    });
    this.getSpesificScore();
  }

  public getSpesificScore() {
    this.teacherService
      .getSpesificScore(this.idStudent)
      .subscribe((res: any) => {
        this.students = res.body;
      });
  }

  public onEdit(students: any) {
    this.selectedScore = students;
    this.router.navigate(['/teacher/newScore/detailScore-student/' + this.idStudent + '/' + students._id]);
  }

  public onBack() {
    this.location.back();
  }
}
