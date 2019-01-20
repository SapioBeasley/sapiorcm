import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesLayoutComponent } from './resources-layout.component';

describe('ResourcesLayoutComponent', () => {
  let component: ResourcesLayoutComponent;
  let fixture: ComponentFixture<ResourcesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
