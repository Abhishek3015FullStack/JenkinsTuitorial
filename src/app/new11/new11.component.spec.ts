import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New11Component } from './new11.component';

describe('New11Component', () => {
  let component: New11Component;
  let fixture: ComponentFixture<New11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [New11Component]
    });
    fixture = TestBed.createComponent(New11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
