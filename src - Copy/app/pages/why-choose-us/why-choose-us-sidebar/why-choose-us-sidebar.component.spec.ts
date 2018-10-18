import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseUsSidebarComponent } from './why-choose-us-sidebar.component';

describe('WhyChooseUsSidebarComponent', () => {
  let component: WhyChooseUsSidebarComponent;
  let fixture: ComponentFixture<WhyChooseUsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyChooseUsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyChooseUsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
