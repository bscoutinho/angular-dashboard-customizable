import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomdashComponent } from './customdash.component';

describe('CustomdashComponent', () => {
  let component: CustomdashComponent;
  let fixture: ComponentFixture<CustomdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
