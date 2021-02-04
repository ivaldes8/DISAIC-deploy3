import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeneric1Component } from './add-generic1.component';

describe('AddGeneric1Component', () => {
  let component: AddGeneric1Component;
  let fixture: ComponentFixture<AddGeneric1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGeneric1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGeneric1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
