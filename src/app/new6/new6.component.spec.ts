import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New6Component } from './new6.component';

describe('New6Component', () => {
  let component: New6Component;
  let fixture: ComponentFixture<New6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [New6Component]
    });
    fixture = TestBed.createComponent(New6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
