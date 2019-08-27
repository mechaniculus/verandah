import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerandahTastingComponent } from './verandah-tasting.component';

describe('VerandahTastingComponent', () => {
  let component: VerandahTastingComponent;
  let fixture: ComponentFixture<VerandahTastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerandahTastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerandahTastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
