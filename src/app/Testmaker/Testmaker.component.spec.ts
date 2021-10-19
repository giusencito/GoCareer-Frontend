/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestmakerComponent } from './Testmaker.component';

describe('TestmakerComponent', () => {
  let component: TestmakerComponent;
  let fixture: ComponentFixture<TestmakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
