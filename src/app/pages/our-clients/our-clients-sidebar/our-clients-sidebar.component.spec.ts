import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClientsSidebarComponent } from './our-clients-sidebar.component';

describe('OurClientsSidebarComponent', () => {
  let component: OurClientsSidebarComponent;
  let fixture: ComponentFixture<OurClientsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurClientsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurClientsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
