import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeTypeComponent } from './orange-type.component';

describe('OrangeTypeComponent', () => {
  let component: OrangeTypeComponent;
  let fixture: ComponentFixture<OrangeTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrangeTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
