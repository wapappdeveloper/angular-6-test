import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrkNgGridComponent } from './srk-ng-grid.component';

describe('SrkNgGridComponent', () => {
  let component: SrkNgGridComponent;
  let fixture: ComponentFixture<SrkNgGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrkNgGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrkNgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
