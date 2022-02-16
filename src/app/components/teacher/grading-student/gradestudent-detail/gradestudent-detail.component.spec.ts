import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradestudentDetailComponent } from './gradestudent-detail.component';

describe('GradestudentDetailComponent', () => {
  let component: GradestudentDetailComponent;
  let fixture: ComponentFixture<GradestudentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradestudentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradestudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
