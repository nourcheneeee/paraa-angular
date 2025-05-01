import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncommandesComponent } from './gestioncommandes.component';

describe('GestioncommandesComponent', () => {
  let component: GestioncommandesComponent;
  let fixture: ComponentFixture<GestioncommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestioncommandesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioncommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
