import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EspecialistLoginComponent } from './EspecialistLogin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from "@angular/common/http/testing"

describe('EspecialistLoginComponent', () => {
  let component: EspecialistLoginComponent;
  let fixture: ComponentFixture<EspecialistLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,RouterModule.forRoot([]),HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ EspecialistLoginComponent ],

    })
    .compileComponents()
    .then(()=>{
      fixture = TestBed.createComponent(EspecialistLoginComponent);
      component = fixture.componentInstance;
    });
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
