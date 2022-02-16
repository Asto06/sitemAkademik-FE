import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { StudentClass } from 'src/app/interface/IStudent';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faEraser = faEraser;
  students: StudentClass[] = [];
  selectedStudent!: StudentClass;

  constructor(private headmasterService: HeadmasterService, private router: Router) {}

  ngOnInit(): void {
    this.getStudents();
  }

  public getStudents() {
    this.headmasterService.getStudent().subscribe((res: any) => {
      this.students = res.body;
    });
  }

  public onEdit(students: StudentClass) {
    this.selectedStudent = students;
    this.router.navigate(['/headmaster/student/edit/' + students._id]);
  }

  public onDetail(students: StudentClass) {
    this.selectedStudent = students;
    this.router.navigate(['/headmaster/student/' + students._id]);
  }


}
