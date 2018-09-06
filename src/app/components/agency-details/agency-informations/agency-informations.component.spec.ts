import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyInformationsComponent } from './agency-informations.component';

describe('AgencyInformationsComponent', () => {
  let component: AgencyInformationsComponent;
  let fixture: ComponentFixture<AgencyInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
