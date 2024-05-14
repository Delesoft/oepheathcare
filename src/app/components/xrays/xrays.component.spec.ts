import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XraysComponent } from './xrays.component';

describe('XraysComponent', () => {
  let component: XraysComponent;
  let fixture: ComponentFixture<XraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XraysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
