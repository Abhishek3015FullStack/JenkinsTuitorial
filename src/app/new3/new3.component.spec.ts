import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New3Component } from './new3.component';

describe('New3Component', () => {
  let component: New3Component;
  let fixture: ComponentFixture<New3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [New3Component]
    });
    fixture = TestBed.createComponent(New3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
