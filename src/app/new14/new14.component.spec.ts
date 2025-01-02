import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New14Component } from './new14.component';

describe('New14Component', () => {
  let component: New14Component;
  let fixture: ComponentFixture<New14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [New14Component]
    });
    fixture = TestBed.createComponent(New14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
