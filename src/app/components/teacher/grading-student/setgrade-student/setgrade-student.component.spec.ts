import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetgradeStudentComponent } from './setgrade-student.component';

describe('SetgradeStudentComponent', () => {
  let component: SetgradeStudentComponent;
  let fixture: ComponentFixture<SetgradeStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetgradeStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetgradeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
