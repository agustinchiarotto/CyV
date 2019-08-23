import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldadoComponent } from './saldado.component';

describe('SaldadoComponent', () => {
  let component: SaldadoComponent;
  let fixture: ComponentFixture<SaldadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaldadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
