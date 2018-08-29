import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyPage1Component } from './lazy-page1.component';

describe('LazyPage1Component', () => {
  let component: LazyPage1Component;
  let fixture: ComponentFixture<LazyPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
