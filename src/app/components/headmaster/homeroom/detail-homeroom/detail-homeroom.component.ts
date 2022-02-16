import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeroomData, HomeStudent } from 'src/app/interface/IHomeroom';
import { HeadmasterService } from '../../headmaster.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-homeroom',
  templateUrl: './detail-homeroom.component.html',
  styleUrls: ['./detail-homeroom.component.css'],
})
export class DetailHomeroomComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  spinner = false;
  idHomeroom: any;
  homerooms!: HomeroomData;
  selectedStudent!: HomeStudent;

  constructor(
    private headmasterService: HeadmasterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idHomeroom = params['id'];
    });
    this._spinner();
    this.getSpesificHomerooms();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public getSpesificHomerooms() {
    this.headmasterService
      .getSpesificHomeroom(this.idHomeroom)
      .subscribe((res: any) => {
        this.homerooms = res.body;
      });
  }

  public onStudent(homerooms: HomeStudent) {
    this.selectedStudent = homerooms;
    this.router.navigate(['/headmaster/homeroom/' + this.idHomeroom + '/' + homerooms._id]);
  }

  public onBack() {
    this.router.navigate(['/headmaster/homeroom']);
  }
}
