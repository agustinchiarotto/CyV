import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoAfiliacionComponent } from './periodo-afiliacion.component';

describe('PeriodoAfiliacionComponent', () => {
  let component: PeriodoAfiliacionComponent;
  let fixture: ComponentFixture<PeriodoAfiliacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoAfiliacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
