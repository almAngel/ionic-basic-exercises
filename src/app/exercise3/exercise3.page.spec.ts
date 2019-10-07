import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise3Page } from './exercise3.page';

describe('Exercise3Page', () => {
  let component: Exercise3Page;
  let fixture: ComponentFixture<Exercise3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
