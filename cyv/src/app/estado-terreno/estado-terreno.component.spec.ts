import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoTerrenoComponent } from './estado-terreno.component';

describe('EstadoTerrenoComponent', () => {
  let component: EstadoTerrenoComponent;
  let fixture: ComponentFixture<EstadoTerrenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoTerrenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoTerrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
