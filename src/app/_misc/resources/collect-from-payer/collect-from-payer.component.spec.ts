import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectFromPayerComponent } from './collect-from-payer.component';

describe('CollectFromPayerComponent', () => {
  let component: CollectFromPayerComponent;
  let fixture: ComponentFixture<CollectFromPayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectFromPayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectFromPayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
