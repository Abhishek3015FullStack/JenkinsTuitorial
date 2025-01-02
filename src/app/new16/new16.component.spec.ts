import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New16Component } from './new16.component';

describe('New16Component', () => {
  let component: New16Component;
  let fixture: ComponentFixture<New16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [New16Component]
    });
    fixture = TestBed.createComponent(New16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
