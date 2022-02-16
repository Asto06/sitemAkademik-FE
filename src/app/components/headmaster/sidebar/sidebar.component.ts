import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/_services/auth-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
