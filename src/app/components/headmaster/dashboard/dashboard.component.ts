import { Component, OnInit } from '@angular/core';
import { HeadmasterData } from 'src/app/interface/IHeadmaster';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  idHeadmaster: any;
  profilHeadmaster!: HeadmasterData;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.getIdHeadmaster();
  }

  public getIdHeadmaster() {
    this.idHeadmaster = this.tokenStorageService.getUser()!;
    this.profilHeadmaster = this.idHeadmaster.user;
  }

}
