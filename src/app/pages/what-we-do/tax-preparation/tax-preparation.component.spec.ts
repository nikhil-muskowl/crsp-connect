import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxPreparationComponent } from './tax-preparation.component';

describe('TaxPreparationComponent', () => {
  let component: TaxPreparationComponent;
  let fixture: ComponentFixture<TaxPreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxPreparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
