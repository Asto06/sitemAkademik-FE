import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { HomeroomData } from 'src/app/interface/IHomeroom';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-all-homeroom',
  templateUrl: './all-homeroom.component.html',
  styleUrls: ['./all-homeroom.component.css'],
})
export class AllHomeroomComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faEraser = faEraser;
  homeroom: HomeroomData[] = [];
  selectedHomeroom!: HomeroomData;

  constructor(
    private headmasterService: HeadmasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHomerooms();
  }

  public getHomerooms() {
    this.headmasterService.getHomeroom().subscribe((res: any) => {
      this.homeroom = res.body;
    });
  }

  public onDetail(homeroom: HomeroomData) {
    this.selectedHomeroom = homeroom;
    this.router.navigate(['/headmaster/homeroom/' + homeroom._id]);
  }

  public onEdit(homeroom: HomeroomData) {
    this.selectedHomeroom = homeroom;
    this.router.navigate(['/headmaster/homeroom/edit/homeroom/' + homeroom._id]);
  }

  public onSet() {
    this.router.navigate(['/headmaster/homeroom/set/from-teacher/set']);
  }
}
