import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavSectionComponent } from './fav-section.component';

describe('FavSectionComponent', () => {
  let component: FavSectionComponent;
  let fixture: ComponentFixture<FavSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
