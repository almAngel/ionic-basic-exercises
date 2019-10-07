import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctocatComponent } from './octocat.component';

describe('OctocatComponent', () => {
  let component: OctocatComponent;
  let fixture: ComponentFixture<OctocatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctocatComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
