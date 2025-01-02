import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New8Component } from './new8.component';

describe('New8Component', () => {
  let component: New8Component;
  let fixture: ComponentFixture<New8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [New8Component]
    });
    fixture = TestBed.createComponent(New8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
