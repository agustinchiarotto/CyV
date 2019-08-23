import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoBeneficioComponent } from './estado-beneficio.component';

describe('EstadoBeneficioComponent', () => {
  let component: EstadoBeneficioComponent;
  let fixture: ComponentFixture<EstadoBeneficioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoBeneficioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
