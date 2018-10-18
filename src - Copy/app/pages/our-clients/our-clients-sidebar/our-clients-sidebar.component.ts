import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-clients-sidebar',
  templateUrl: './our-clients-sidebar.component.html',
  styleUrls: ['./our-clients-sidebar.component.css']
})
export class OurClientsSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
