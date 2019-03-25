import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContprisonerComponent } from './contprisoner.component';

describe('ContprisonerComponent', () => {
  let component: ContprisonerComponent;
  let fixture: ComponentFixture<ContprisonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContprisonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContprisonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
