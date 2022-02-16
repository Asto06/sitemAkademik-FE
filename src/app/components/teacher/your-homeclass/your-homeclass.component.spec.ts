import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourHomeclassComponent } from './your-homeclass.component';

describe('YourHomeclassComponent', () => {
  let component: YourHomeclassComponent;
  let fixture: ComponentFixture<YourHomeclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourHomeclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourHomeclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
