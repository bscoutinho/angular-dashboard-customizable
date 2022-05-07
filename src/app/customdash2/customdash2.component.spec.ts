import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customdash2Component } from './customdash2.component';

describe('Customdash2Component', () => {
  let component: Customdash2Component;
  let fixture: ComponentFixture<Customdash2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Customdash2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Customdash2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
