import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllgradeStudentComponent } from './allgrade-student.component';

describe('AllgradeStudentComponent', () => {
  let component: AllgradeStudentComponent;
  let fixture: ComponentFixture<AllgradeStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllgradeStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllgradeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
