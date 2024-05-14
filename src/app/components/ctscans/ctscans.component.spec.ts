import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtscansComponent } from './ctscans.component';

describe('CtscansComponent', () => {
  let component: CtscansComponent;
  let fixture: ComponentFixture<CtscansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CtscansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CtscansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
