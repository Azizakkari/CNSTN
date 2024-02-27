import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncaisseformsComponent } from './gestioncaisseforms.component';

describe('GestioncaisseformsComponent', () => {
  let component: GestioncaisseformsComponent;
  let fixture: ComponentFixture<GestioncaisseformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestioncaisseformsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestioncaisseformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
