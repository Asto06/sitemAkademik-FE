import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { CourseTeacher, TeacherData } from 'src/app/interface/ITeacher';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-all-teacher',
  templateUrl: './all-teacher.component.html',
  styleUrls: ['./all-teacher.component.css'],
})
export class AllTeacherComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faEraser = faEraser;
  teachers!: CourseTeacher[];
  selectedTeacher!: CourseTeacher;

  constructor(
    private headmasterService: HeadmasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers() {
    this.headmasterService.getTeacher().subscribe((res: any) => {
      this.teachers = res.body;
    });
  }

  public onEdit(teachers: CourseTeacher) {
    this.selectedTeacher = teachers;
    this.router.navigate(['/headmaster/teacher/edit/' + teachers._id]);
  }

  public onDetail(teachers: CourseTeacher) {
    this.selectedTeacher = teachers;
    this.router.navigate(['/headmaster/teacher/' + teachers._id]);
  }
}
