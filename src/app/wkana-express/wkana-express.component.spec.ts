import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WkanaExpressComponent } from './wkana-express.component';

describe('WkanaExpressComponent', () => {
  let component: WkanaExpressComponent;
  let fixture: ComponentFixture<WkanaExpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WkanaExpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WkanaExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
