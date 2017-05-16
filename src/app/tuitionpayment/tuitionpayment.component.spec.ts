import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitionpaymentComponent } from './tuitionpayment.component';

describe('TuitionpaymentComponent', () => {
  let component: TuitionpaymentComponent;
  let fixture: ComponentFixture<TuitionpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuitionpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuitionpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
