import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-businesses',
  templateUrl: './other-businesses.component.html',
  styleUrls: ['./other-businesses.component.css']
})
export class OtherBusinessesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
