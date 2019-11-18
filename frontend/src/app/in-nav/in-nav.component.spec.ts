import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InNavComponent } from './in-nav.component';

describe('InNavComponent', () => {
  let component: InNavComponent;
  let fixture: ComponentFixture<InNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
