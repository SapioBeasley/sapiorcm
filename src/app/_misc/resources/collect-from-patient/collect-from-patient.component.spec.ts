import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectFromPatientComponent } from './collect-from-patient.component';

describe('CollectFromPatientComponent', () => {
  let component: CollectFromPatientComponent;
  let fixture: ComponentFixture<CollectFromPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectFromPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectFromPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
