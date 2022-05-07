import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customdash3Component } from './customdash3.component';

describe('Customdash3Component', () => {
  let component: Customdash3Component;
  let fixture: ComponentFixture<Customdash3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Customdash3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Customdash3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
