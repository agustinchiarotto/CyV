import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoAfiliacionComponent } from './pedido-afiliacion.component';

describe('PedidoAfiliacionComponent', () => {
  let component: PedidoAfiliacionComponent;
  let fixture: ComponentFixture<PedidoAfiliacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoAfiliacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
