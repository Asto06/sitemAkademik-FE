import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseData } from 'src/app/interface/ICourse';
import { addScore, studentScore } from 'src/app/interface/IScore';
import { StudentData } from 'src/app/interface/IStudent';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-add-newscore',
  templateUrl: './add-newscore.component.html',
  styleUrls: ['./add-newscore.component.css'],
})
export class AddNewscoreComponent implements OnInit {
  addScoreForm!: FormGroup;
  students!: StudentData[];
  courses!: CourseData[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private headmasterService: HeadmasterService
  ) {}

  ngOnInit(): void {
    this.scoreFormInit();
    this.getStudents();
    this.getCourses();
  }

  public scoreFormInit() {
    this.addScoreForm = this.formBuilder.group({
      student: ['', Validators.required],
      course: ['', Validators.required],
    });
  }

  public getStudents() {
    this.headmasterService.getStudent().subscribe((res: any) => {
      this.students = res.body;
    });
  }

  public getCourses() {
    this.headmasterService.getCourse().subscribe((res: any) => {
      this.courses = res.body;
    });
  }

  get scoreFormControl() {
    return this.addScoreForm.controls;
  }

  public onSubmit() {
    const addScore: addScore = {
      student: this.scoreFormControl['student'].value,
      course: this.scoreFormControl['course'].value,
    };
    this.headmasterService
      .addScoreToStudent(addScore.student, addScore.course)
      .subscribe((res) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Add Score Field Data New Student Successfull',
          text: 'Please Check The Menu Score Then Check The Detail',
          showConfirmButton: true,
          timer: 3000,
        });
        this.router.navigate(['/headmaster/score']);
      }, () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          showConfirmButton: false,
          timer: 3000,
        });
      });
  }

  public onBack() {
    this.router.navigate(['/headmaster/score']);
  }
}
