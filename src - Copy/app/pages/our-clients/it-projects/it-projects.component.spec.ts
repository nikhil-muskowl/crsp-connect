import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItProjectsComponent } from './it-projects.component';

describe('ItProjectsComponent', () => {
  let component: ItProjectsComponent;
  let fixture: ComponentFixture<ItProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
