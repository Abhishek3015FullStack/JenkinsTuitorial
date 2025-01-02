import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New12Component } from './new12.component';

describe('New12Component', () => {
  let component: New12Component;
  let fixture: ComponentFixture<New12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [New12Component]
    });
    fixture = TestBed.createComponent(New12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
