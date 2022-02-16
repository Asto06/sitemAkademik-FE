import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { ClassData } from 'src/app/interface/IClass';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-all-class',
  templateUrl: './all-class.component.html',
  styleUrls: ['./all-class.component.css'],
})
export class AllClassComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faEraser = faEraser;
  classes: ClassData[] = [];
  selectedClass!: ClassData;

  constructor(
    private router: Router,
    private headmasterService: HeadmasterService,
  ) {}

  ngOnInit(): void {
    this.getClasses();
  }

  public getClasses() {
    this.headmasterService.getClass().subscribe((res: any) => {
      this.classes = res.body;
      console.log(this.classes)
    });
  }

  public onDetail(classes: ClassData) {
    this.selectedClass = classes;
    this.router.navigate(['/headmaster/class/' + classes._id]);
  }

  public onEdit(classes: ClassData) {
    this.selectedClass = classes;
    this.router.navigate(['/headmaster/class/edit/' + classes._id]);
  }
}
