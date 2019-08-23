import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboSueldoComponent } from './recibo-sueldo.component';

describe('ReciboSueldoComponent', () => {
  let component: ReciboSueldoComponent;
  let fixture: ComponentFixture<ReciboSueldoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciboSueldoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciboSueldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
