import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise1Page } from './exercise1.page';

describe('Exercise1Page', () => {
  let component: Exercise1Page;
  let fixture: ComponentFixture<Exercise1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
