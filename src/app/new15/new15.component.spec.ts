import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New15Component } from './new15.component';

describe('New15Component', () => {
  let component: New15Component;
  let fixture: ComponentFixture<New15Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [New15Component]
    });
    fixture = TestBed.createComponent(New15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
