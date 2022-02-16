import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewscoreComponent } from './add-newscore.component';

describe('AddNewscoreComponent', () => {
  let component: AddNewscoreComponent;
  let fixture: ComponentFixture<AddNewscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewscoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
