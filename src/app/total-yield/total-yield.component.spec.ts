import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalYieldComponent } from './total-yield.component';

describe('TotalYieldComponent', () => {
  let component: TotalYieldComponent;
  let fixture: ComponentFixture<TotalYieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalYieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalYieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
