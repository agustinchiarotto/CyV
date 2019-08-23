import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeroidoAfiliacionComponent } from './peroido-afiliacion.component';

describe('PeroidoAfiliacionComponent', () => {
  let component: PeroidoAfiliacionComponent;
  let fixture: ComponentFixture<PeroidoAfiliacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeroidoAfiliacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeroidoAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
