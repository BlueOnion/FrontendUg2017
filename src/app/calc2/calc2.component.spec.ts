/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Calc2Component } from './calc2.component';

describe('Calc2Component', () => {
  let component: Calc2Component;
  let fixture: ComponentFixture<Calc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
