import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGeneric1Component } from './edit-generic1.component';

describe('EditGeneric1Component', () => {
  let component: EditGeneric1Component;
  let fixture: ComponentFixture<EditGeneric1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGeneric1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGeneric1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
