import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaranteComponent } from './garante.component';

describe('GaranteComponent', () => {
  let component: GaranteComponent;
  let fixture: ComponentFixture<GaranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
