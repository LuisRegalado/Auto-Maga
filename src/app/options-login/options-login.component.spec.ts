import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsLoginComponent } from './options-login.component';

describe('OptionsLoginComponent', () => {
  let component: OptionsLoginComponent;
  let fixture: ComponentFixture<OptionsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
