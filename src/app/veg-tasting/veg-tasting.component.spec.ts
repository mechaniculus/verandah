import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegTastingComponent } from './veg-tasting.component';

describe('VegTastingComponent', () => {
  let component: VegTastingComponent;
  let fixture: ComponentFixture<VegTastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegTastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegTastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
