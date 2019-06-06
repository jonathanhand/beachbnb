import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedetailPage } from './placedetail.page';

describe('PlacedetailPage', () => {
  let component: PlacedetailPage;
  let fixture: ComponentFixture<PlacedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacedetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
