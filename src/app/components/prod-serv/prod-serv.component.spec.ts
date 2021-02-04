import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdServComponent } from './prod-serv.component';

describe('ProdServComponent', () => {
  let component: ProdServComponent;
  let fixture: ComponentFixture<ProdServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdServComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
