import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise5Page } from './exercise5.page';

describe('Exercise5Page', () => {
  let component: Exercise5Page;
  let fixture: ComponentFixture<Exercise5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
