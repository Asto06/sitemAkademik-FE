import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { getParent } from 'src/app/interface/IParent';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-all-parent',
  templateUrl: './all-parent.component.html',
  styleUrls: ['./all-parent.component.css'],
})
export class AllParentComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faEraser = faEraser;
  parents: getParent[] = [];
  selectedParent!: getParent;

  constructor(
    private headmasterService: HeadmasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getParents();
  }

  public getParents() {
    this.headmasterService.getParent().subscribe((res: any) => {
      this.parents = res.body;
    });
  }

  public onDetail(parents: getParent) {
    this.selectedParent = parents;
    this.router.navigate(['/headmaster/parent/' + parents._id]);
  }

  public onEdit(parents: getParent) {
    this.selectedParent = parents;
    this.router.navigate(['/headmaster/parent/edit/' + parents._id]);
  }
}
