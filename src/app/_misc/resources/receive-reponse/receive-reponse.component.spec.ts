import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveReponseComponent } from './receive-reponse.component';

describe('ReceiveReponseComponent', () => {
  let component: ReceiveReponseComponent;
  let fixture: ComponentFixture<ReceiveReponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveReponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
