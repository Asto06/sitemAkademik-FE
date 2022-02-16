import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHomeroomComponent } from './edit-homeroom.component';

describe('EditHomeroomComponent', () => {
  let component: EditHomeroomComponent;
  let fixture: ComponentFixture<EditHomeroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHomeroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHomeroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
