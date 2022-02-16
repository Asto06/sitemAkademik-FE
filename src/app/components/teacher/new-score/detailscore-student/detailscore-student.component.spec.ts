import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscoreStudentComponent } from './detailscore-student.component';

describe('DetailscoreStudentComponent', () => {
  let component: DetailscoreStudentComponent;
  let fixture: ComponentFixture<DetailscoreStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailscoreStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailscoreStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
