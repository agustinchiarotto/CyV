import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutaComponent } from './couta.component';

describe('CoutaComponent', () => {
  let component: CoutaComponent;
  let fixture: ComponentFixture<CoutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
