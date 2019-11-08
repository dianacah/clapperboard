import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNuevaPeliComponent } from './popup-nueva-peli.component';

describe('PopupNuevaPeliComponent', () => {
  let component: PopupNuevaPeliComponent;
  let fixture: ComponentFixture<PopupNuevaPeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupNuevaPeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNuevaPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
