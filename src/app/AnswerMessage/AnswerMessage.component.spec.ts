import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from "@angular/router/testing";
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { AnswerMessageComponent } from './AnswerMessage.component';

describe('AnswerMessageComponent', () => {
  let component: AnswerMessageComponent;
  let fixture: ComponentFixture<AnswerMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,RouterModule.forRoot([]),HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ AnswerMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });






});
