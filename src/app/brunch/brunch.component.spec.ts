import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrunchComponent } from './brunch.component';

describe('BrunchComponent', () => {
  let component: BrunchComponent;
  let fixture: ComponentFixture<BrunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
