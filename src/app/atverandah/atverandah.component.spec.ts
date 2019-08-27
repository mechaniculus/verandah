import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtverandahComponent } from './atverandah.component';

describe('AtverandahComponent', () => {
  let component: AtverandahComponent;
  let fixture: ComponentFixture<AtverandahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtverandahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtverandahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
