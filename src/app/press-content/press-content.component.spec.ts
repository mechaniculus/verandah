import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressContentComponent } from './press-content.component';

describe('PressContentComponent', () => {
  let component: PressContentComponent;
  let fixture: ComponentFixture<PressContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
