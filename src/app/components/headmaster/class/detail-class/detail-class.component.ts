import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassData } from 'src/app/interface/IClass';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-detail-class',
  templateUrl: './detail-class.component.html',
  styleUrls: ['./detail-class.component.css'],
})
export class DetailClassComponent implements OnInit {
  spinner = false;
  idClass: any;
  classes!: ClassData;

  constructor(
    private headmasterService: HeadmasterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idClass = params['id'];
    });
    this._spinner();
    this.getSpesificClass();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public getSpesificClass() {
    this.headmasterService
      .getSpesificClass(this.idClass)
      .subscribe((res: any) => {
        this.classes = res.body;
      });
  }

  public onBack() {
    this.router.navigate(['/headmaster/class']);
  }
}
