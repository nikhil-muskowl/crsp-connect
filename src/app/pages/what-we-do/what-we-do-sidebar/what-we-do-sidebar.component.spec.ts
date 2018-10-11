import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoSidebarComponent } from './what-we-do-sidebar.component';

describe('WhatWeDoSidebarComponent', () => {
  let component: WhatWeDoSidebarComponent;
  let fixture: ComponentFixture<WhatWeDoSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWeDoSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
