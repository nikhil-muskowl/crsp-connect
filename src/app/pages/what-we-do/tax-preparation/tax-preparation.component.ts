import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-preparation',
  templateUrl: './tax-preparation.component.html',
  styleUrls: ['./tax-preparation.component.css']
})
export class TaxPreparationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
