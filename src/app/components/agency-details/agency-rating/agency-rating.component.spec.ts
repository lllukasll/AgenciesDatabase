import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyRatingComponent } from './agency-rating.component';

describe('AgencyRatingComponent', () => {
  let component: AgencyRatingComponent;
  let fixture: ComponentFixture<AgencyRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
