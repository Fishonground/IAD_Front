import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContmainComponent } from './contmain.component';

describe('ContmainComponent', () => {
  let component: ContmainComponent;
  let fixture: ComponentFixture<ContmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
