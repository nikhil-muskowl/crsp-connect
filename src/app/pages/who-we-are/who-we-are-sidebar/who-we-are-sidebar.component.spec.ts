import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreSidebarComponent } from './who-we-are-sidebar.component';

describe('WhoWeAreSidebarComponent', () => {
  let component: WhoWeAreSidebarComponent;
  let fixture: ComponentFixture<WhoWeAreSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoWeAreSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWeAreSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
