import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareClaimComponent } from './prepare-claim-resource.component';

describe('PrepareClaimComponent', () => {
  let component: PrepareClaimComponent;
  let fixture: ComponentFixture<PrepareClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
