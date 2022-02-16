import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRaportComponent } from './student-raport.component';

describe('StudentRaportComponent', () => {
  let component: StudentRaportComponent;
  let fixture: ComponentFixture<StudentRaportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRaportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRaportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
