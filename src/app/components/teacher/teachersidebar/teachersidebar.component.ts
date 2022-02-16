import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/_services/auth-service.service';

@Component({
  selector: 'app-teachersidebar',
  templateUrl: './teachersidebar.component.html',
  styleUrls: ['./teachersidebar.component.css']
})
export class TeachersidebarComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
