import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-benefits',
    templateUrl: './benefits.component.html',
    styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {

    constructor(private router: Router) {

    }

    ngOnInit() {
        window.scrollTo(0, 0);
    }

}
