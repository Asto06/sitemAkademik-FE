import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseData } from 'src/app/interface/ICourse';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css'],
})
export class DetailCourseComponent implements OnInit {
  spinner = false;
  idCourse: any;
  courses!: CourseData;

  constructor(
    private headmasterService: HeadmasterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idCourse = params['id']
    })
    this._spinner();
    this.getSpesificCourses();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public getSpesificCourses() {
    this.headmasterService.getSpesificCourse(this.idCourse).subscribe((res: any) => {
      this.courses = res.body;
    })
  }

  public onBack() {
    this.router.navigate(['/headmaster/course']);
  }
}
