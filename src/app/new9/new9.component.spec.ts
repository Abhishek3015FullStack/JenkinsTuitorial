import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New9Component } from './new9.component';

describe('New9Component', () => {
  let component: New9Component;
  let fixture: ComponentFixture<New9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [New9Component]
    });
    fixture = TestBed.createComponent(New9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
