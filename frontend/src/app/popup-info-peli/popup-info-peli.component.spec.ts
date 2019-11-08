import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupInfoPeliComponent } from './popup-info-peli.component';

describe('PopupInfoPeliComponent', () => {
  let component: PopupInfoPeliComponent;
  let fixture: ComponentFixture<PopupInfoPeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupInfoPeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupInfoPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
