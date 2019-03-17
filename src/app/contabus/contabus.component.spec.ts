import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContabusComponent } from './contabus.component';

describe('ContabusComponent', () => {
  let component: ContabusComponent;
  let fixture: ComponentFixture<ContabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
