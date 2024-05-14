import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasoundsComponent } from './ultrasounds.component';

describe('UltrasoundsComponent', () => {
  let component: UltrasoundsComponent;
  let fixture: ComponentFixture<UltrasoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UltrasoundsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UltrasoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
