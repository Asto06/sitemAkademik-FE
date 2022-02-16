import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHometeacherComponent } from './add-hometeacher.component';

describe('AddHometeacherComponent', () => {
  let component: AddHometeacherComponent;
  let fixture: ComponentFixture<AddHometeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHometeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHometeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
