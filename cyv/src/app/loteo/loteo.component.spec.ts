import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteoComponent } from './loteo.component';

describe('LoteoComponent', () => {
  let component: LoteoComponent;
  let fixture: ComponentFixture<LoteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
