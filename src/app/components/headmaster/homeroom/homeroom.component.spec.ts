import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeroomComponent } from './homeroom.component';

describe('HomeroomComponent', () => {
  let component: HomeroomComponent;
  let fixture: ComponentFixture<HomeroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
