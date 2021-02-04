import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGeneric1Component } from './delete-generic1.component';

describe('DeleteGeneric1Component', () => {
  let component: DeleteGeneric1Component;
  let fixture: ComponentFixture<DeleteGeneric1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGeneric1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGeneric1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
