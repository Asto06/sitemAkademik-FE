import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentScheduleComponent } from './parent-schedule.component';

describe('ParentScheduleComponent', () => {
  let component: ParentScheduleComponent;
  let fixture: ComponentFixture<ParentScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
