import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBusinessesComponent } from './other-businesses.component';

describe('OtherBusinessesComponent', () => {
  let component: OtherBusinessesComponent;
  let fixture: ComponentFixture<OtherBusinessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherBusinessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherBusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
