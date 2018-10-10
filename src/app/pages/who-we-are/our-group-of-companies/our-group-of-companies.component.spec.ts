import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurGroupOfCompaniesComponent } from './our-group-of-companies.component';

describe('OurGroupOfCompaniesComponent', () => {
  let component: OurGroupOfCompaniesComponent;
  let fixture: ComponentFixture<OurGroupOfCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurGroupOfCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurGroupOfCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
