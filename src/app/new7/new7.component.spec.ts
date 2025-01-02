import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New7Component } from './new7.component';

describe('New7Component', () => {
  let component: New7Component;
  let fixture: ComponentFixture<New7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [New7Component]
    });
    fixture = TestBed.createComponent(New7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
