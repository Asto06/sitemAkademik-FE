import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetcourseComponent } from './setcourse.component';

describe('SetcourseComponent', () => {
  let component: SetcourseComponent;
  let fixture: ComponentFixture<SetcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
