import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGendersComponent } from './nav-genders.component';

describe('NavGendersComponent', () => {
  let component: NavGendersComponent;
  let fixture: ComponentFixture<NavGendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavGendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavGendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
