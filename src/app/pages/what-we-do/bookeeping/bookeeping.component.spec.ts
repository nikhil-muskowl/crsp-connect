import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookeepingComponent } from './bookeeping.component';

describe('BookeepingComponent', () => {
  let component: BookeepingComponent;
  let fixture: ComponentFixture<BookeepingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookeepingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookeepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
