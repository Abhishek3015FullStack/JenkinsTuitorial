import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New10Component } from './new10.component';

describe('New10Component', () => {
  let component: New10Component;
  let fixture: ComponentFixture<New10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [New10Component]
    });
    fixture = TestBed.createComponent(New10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
