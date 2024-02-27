import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilcnstnComponent } from './acceuilcnstn.component';

describe('AcceuilcnstnComponent', () => {
  let component: AcceuilcnstnComponent;
  let fixture: ComponentFixture<AcceuilcnstnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceuilcnstnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceuilcnstnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
