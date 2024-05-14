import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrisComponent } from './mris.component';

describe('MrisComponent', () => {
  let component: MrisComponent;
  let fixture: ComponentFixture<MrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MrisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
