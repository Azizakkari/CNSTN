import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallerie2Component } from './gallerie2.component';

describe('Gallerie2Component', () => {
  let component: Gallerie2Component;
  let fixture: ComponentFixture<Gallerie2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gallerie2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Gallerie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
