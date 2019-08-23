import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudTerrenoComponent } from './solicitud-terreno.component';

describe('SolicitudTerrenoComponent', () => {
  let component: SolicitudTerrenoComponent;
  let fixture: ComponentFixture<SolicitudTerrenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudTerrenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudTerrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
