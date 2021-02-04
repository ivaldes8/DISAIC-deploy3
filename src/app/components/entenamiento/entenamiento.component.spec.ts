import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntenamientoComponent } from './entenamiento.component';

describe('EntenamientoComponent', () => {
  let component: EntenamientoComponent;
  let fixture: ComponentFixture<EntenamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntenamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
