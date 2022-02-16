import { Component, OnInit } from '@angular/core';
import { classTeacher } from 'src/app/interface/IClass';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-your-homeclass',
  templateUrl: './your-homeclass.component.html',
  styleUrls: ['./your-homeclass.component.css'],
})
export class YourHomeclassComponent implements OnInit {
  idTeacher: any;
  homeClass: classTeacher = {};

  constructor(
    private tokenStorage: TokenStorageService,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.getHomeroom();
  }

  public getHomeroom() {
    this.idTeacher = this.tokenStorage.getUser();
    this.teacherService
      .getClassTeacher(this.idTeacher.user.homeClass._id)
      .subscribe((res: any) => {
        this.homeClass = res.body;
      });
  }
}
