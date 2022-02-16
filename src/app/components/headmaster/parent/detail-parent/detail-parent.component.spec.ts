import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailParentComponent } from './detail-parent.component';

describe('DetailParentComponent', () => {
  let component: DetailParentComponent;
  let fixture: ComponentFixture<DetailParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
