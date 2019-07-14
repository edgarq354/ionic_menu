import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionPage } from './animacion.page';

describe('AnimacionPage', () => {
  let component: AnimacionPage;
  let fixture: ComponentFixture<AnimacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
