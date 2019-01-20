import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmitClaimComponent } from './transmit-claim.component';

describe('TransmitClaimComponent', () => {
  let component: TransmitClaimComponent;
  let fixture: ComponentFixture<TransmitClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransmitClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmitClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
