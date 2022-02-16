import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreHomeroomComponent } from './score-homeroom.component';

describe('ScoreHomeroomComponent', () => {
  let component: ScoreHomeroomComponent;
  let fixture: ComponentFixture<ScoreHomeroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreHomeroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreHomeroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
