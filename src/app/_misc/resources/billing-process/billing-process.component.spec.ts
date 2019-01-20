import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingProcessComponent } from './billing-process.component';

describe('BillingProcessComponent', () => {
  let component: BillingProcessComponent;
  let fixture: ComponentFixture<BillingProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
