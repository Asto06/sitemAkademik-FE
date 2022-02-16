import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHomeroomComponent } from './detail-homeroom.component';

describe('DetailHomeroomComponent', () => {
  let component: DetailHomeroomComponent;
  let fixture: ComponentFixture<DetailHomeroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailHomeroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHomeroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
