import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDeCoutasComponent } from './plan-de-coutas.component';

describe('PlanDeCoutasComponent', () => {
  let component: PlanDeCoutasComponent;
  let fixture: ComponentFixture<PlanDeCoutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDeCoutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDeCoutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
