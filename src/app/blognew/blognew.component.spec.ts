import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlognewComponent } from './blognew.component';

describe('BlognewComponent', () => {
  let component: BlognewComponent;
  let fixture: ComponentFixture<BlognewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlognewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlognewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
