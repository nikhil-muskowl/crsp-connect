import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-we-are-sidebar',
  templateUrl: './who-we-are-sidebar.component.html',
  styleUrls: ['./who-we-are-sidebar.component.css']
})
export class WhoWeAreSidebarComponent implements OnInit {

  constructor() {
   
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
