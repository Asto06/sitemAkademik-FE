import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faEraser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CourseData } from 'src/app/interface/ICourse';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.css'],
})
export class AllCourseComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faEraser = faEraser;
  courses: CourseData[] = [];
  selectedCourse: any;

  constructor(
    private headmasterService: HeadmasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCourses();
  }

  public getCourses() {
    this.headmasterService.getCourse().subscribe((res: any) => {
      this.courses = res.body;
    });
  }

  public onDetail(courses: CourseData) {
    this.selectedCourse = courses;
    this.router.navigate(['/headmaster/course/' + courses._id]);
  }

  public onEdit(courses: CourseData) {
    this.selectedCourse = courses;
    this.router.navigate(['/headmaster/course/edit/' + courses._id]);
  }

  public onSetCourse() {
    this.router.navigate(['/headmaster/course/set/course']);
  }
}
