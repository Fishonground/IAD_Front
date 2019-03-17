import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisonersComponent } from './prisoners.component';

describe('PrisonersComponent', () => {
  let component: PrisonersComponent;
  let fixture: ComponentFixture<PrisonersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrisonersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrisonersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
