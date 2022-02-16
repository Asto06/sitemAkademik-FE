import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingStudentComponent } from './grading-student.component';

describe('GradingStudentComponent', () => {
  let component: GradingStudentComponent;
  let fixture: ComponentFixture<GradingStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradingStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradingStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
