import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefTastingComponent } from './chef-tasting.component';

describe('ChefTastingComponent', () => {
  let component: ChefTastingComponent;
  let fixture: ComponentFixture<ChefTastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefTastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefTastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
