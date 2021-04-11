import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymerchComponent } from './displaymerch.component';

describe('DisplaymerchComponent', () => {
  let component: DisplaymerchComponent;
  let fixture: ComponentFixture<DisplaymerchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaymerchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaymerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
