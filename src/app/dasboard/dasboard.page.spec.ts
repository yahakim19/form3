import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardPage } from './dasboard.page';

describe('DasboardPage', () => {
  let component: DasboardPage;
  let fixture: ComponentFixture<DasboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
