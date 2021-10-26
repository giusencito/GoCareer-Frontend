import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialistProfileComponent } from './especialist-profile.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from "@angular/common/http/testing"
describe('EspecialistProfileComponent', () => {
  let component: EspecialistProfileComponent;
  let fixture: ComponentFixture<EspecialistProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,RouterModule.forRoot([]),HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ EspecialistProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
