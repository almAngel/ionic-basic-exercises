import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise6Page } from './exercise6.page';

describe('Exercise6Page', () => {
  let component: Exercise6Page;
  let fixture: ComponentFixture<Exercise6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
