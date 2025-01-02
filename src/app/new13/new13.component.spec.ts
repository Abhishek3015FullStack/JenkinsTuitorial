import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New13Component } from './new13.component';

describe('New13Component', () => {
  let component: New13Component;
  let fixture: ComponentFixture<New13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [New13Component]
    });
    fixture = TestBed.createComponent(New13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
