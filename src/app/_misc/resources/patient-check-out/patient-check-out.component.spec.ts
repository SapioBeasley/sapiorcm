import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCheckOutComponent } from './patient-check-out.component';

describe('PatientCheckOutComponent', () => {
  let component: PatientCheckOutComponent;
  let fixture: ComponentFixture<PatientCheckOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCheckOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
