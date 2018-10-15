import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it-projects',
  templateUrl: './it-projects.component.html',
  styleUrls: ['./it-projects.component.css']
})
export class ItProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
