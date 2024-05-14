import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MammosComponent } from './mammos.component';

describe('MammosComponent', () => {
  let component: MammosComponent;
  let fixture: ComponentFixture<MammosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MammosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MammosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
