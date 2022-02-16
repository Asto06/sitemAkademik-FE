import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRaportComponent } from './parent-raport.component';

describe('ParentRaportComponent', () => {
  let component: ParentRaportComponent;
  let fixture: ComponentFixture<ParentRaportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentRaportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentRaportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
