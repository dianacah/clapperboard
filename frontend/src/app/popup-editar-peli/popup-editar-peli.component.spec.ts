import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditarPeliComponent } from './popup-editar-peli.component';

describe('PopupEditarPeliComponent', () => {
  let component: PopupEditarPeliComponent;
  let fixture: ComponentFixture<PopupEditarPeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupEditarPeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEditarPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
