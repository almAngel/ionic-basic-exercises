import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise7Page } from './exercise7.page';

describe('Exercise7Page', () => {
  let component: Exercise7Page;
  let fixture: ComponentFixture<Exercise7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
