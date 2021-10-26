/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentLoginComponent } from './StudentLogin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from "@angular/common/http/testing"
describe('StudentLoginComponent', () => {
  let component: StudentLoginComponent;
  let fixture: ComponentFixture<StudentLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,RouterModule.forRoot([]),HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ StudentLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
