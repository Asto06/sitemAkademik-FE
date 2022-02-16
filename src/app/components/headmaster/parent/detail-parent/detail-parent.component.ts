import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getParent } from 'src/app/interface/IParent';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-detail-parent',
  templateUrl: './detail-parent.component.html',
  styleUrls: ['./detail-parent.component.css'],
})
export class DetailParentComponent implements OnInit {
  spinner = false;
  idParent: any;
  parents!: getParent;

  constructor(
    private headmasterService: HeadmasterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idParent = params['id'];
    });
    this._spinner();
    this.getSpesificParent();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public getSpesificParent() {
    this.headmasterService
      .getSpesificParent(this.idParent)
      .subscribe((res: any) => {
        this.parents = res.body;
      });
  }

  public onBack() {
    this.router.navigate(['/headmaster/parent']);
  }
}
