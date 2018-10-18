import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowProcessComponent } from './work-flow-process.component';

describe('WorkFlowProcessComponent', () => {
  let component: WorkFlowProcessComponent;
  let fixture: ComponentFixture<WorkFlowProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkFlowProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFlowProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
