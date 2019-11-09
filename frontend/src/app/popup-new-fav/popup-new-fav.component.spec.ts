import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewFavComponent } from './popup-new-fav.component';

describe('PopupNewFavComponent', () => {
  let component: PopupNewFavComponent;
  let fixture: ComponentFixture<PopupNewFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupNewFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNewFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
