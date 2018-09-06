import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyProjectsComponent } from './agency-projects.component';

describe('AgencyProjectsComponent', () => {
  let component: AgencyProjectsComponent;
  let fixture: ComponentFixture<AgencyProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
