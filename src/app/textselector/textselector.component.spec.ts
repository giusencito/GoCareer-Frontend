import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextselectorComponent } from './textselector.component';

describe('TextselectorComponent', () => {
  let component: TextselectorComponent;
  let fixture: ComponentFixture<TextselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextselectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
