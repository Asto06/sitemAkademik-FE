import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHomeroomComponent } from './all-homeroom.component';

describe('AllHomeroomComponent', () => {
  let component: AllHomeroomComponent;
  let fixture: ComponentFixture<AllHomeroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHomeroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHomeroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
