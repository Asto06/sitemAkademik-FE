import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headmaster',
  templateUrl: './headmaster.component.html',
  styleUrls: ['./headmaster.component.css'],
})
export class HeadmasterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('foo');
    }
  }
}
