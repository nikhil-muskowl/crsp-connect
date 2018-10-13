import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }

      var scrollToTop = window.setInterval(function () {
          var pos = window.pageYOffset;
          console.log(pos);
          if (pos > 0) {
              window.scrollTo(0, 0); 
             // window.scrollTo(0, pos - 20); // how far to scroll on each step
          } else {
              window.clearInterval(scrollToTop);
          }
      }, 16); // how fast to scroll (this equals roughly 60 fps)
  });
  }

}
