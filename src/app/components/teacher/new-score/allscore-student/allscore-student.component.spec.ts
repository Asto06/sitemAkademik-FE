import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllscoreStudentComponent } from './allscore-student.component';

describe('AllscoreStudentComponent', () => {
  let component: AllscoreStudentComponent;
  let fixture: ComponentFixture<AllscoreStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllscoreStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllscoreStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
