import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalcovidComponent } from './globalcovid.component';

describe('GlobalcovidComponent', () => {
  let component: GlobalcovidComponent;
  let fixture: ComponentFixture<GlobalcovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalcovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalcovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
