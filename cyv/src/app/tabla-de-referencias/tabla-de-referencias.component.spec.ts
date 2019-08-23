import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDeReferenciasComponent } from './tabla-de-referencias.component';

describe('TablaDeReferenciasComponent', () => {
  let component: TablaDeReferenciasComponent;
  let fixture: ComponentFixture<TablaDeReferenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDeReferenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDeReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
