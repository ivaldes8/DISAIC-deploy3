import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoServComponent } from './contrato-serv.component';

describe('ContratoServComponent', () => {
  let component: ContratoServComponent;
  let fixture: ComponentFixture<ContratoServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoServComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
