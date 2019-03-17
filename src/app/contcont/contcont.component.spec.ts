import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContcontComponent } from './contcont.component';

describe('ContcontComponent', () => {
  let component: ContcontComponent;
  let fixture: ComponentFixture<ContcontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContcontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContcontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
