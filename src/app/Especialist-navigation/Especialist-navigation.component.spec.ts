/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EspecialistNavigationComponent } from './Especialist-navigation.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from "@angular/common/http/testing"
describe('EspecialistNavigationComponent', () => {
  let component: EspecialistNavigationComponent;
  let fixture: ComponentFixture<EspecialistNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,RouterModule.forRoot([]),HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ EspecialistNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
