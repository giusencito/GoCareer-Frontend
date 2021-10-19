import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialistProfileComponent } from './especialist-profile.component';

describe('EspecialistProfileComponent', () => {
  let component: EspecialistProfileComponent;
  let fixture: ComponentFixture<EspecialistProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
