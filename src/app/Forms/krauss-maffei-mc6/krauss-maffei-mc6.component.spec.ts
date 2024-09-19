import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KraussMaffeiMC6Component } from './krauss-maffei-mc6.component';

describe('KraussMaffeiMC6Component', () => {
  let component: KraussMaffeiMC6Component;
  let fixture: ComponentFixture<KraussMaffeiMC6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KraussMaffeiMC6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KraussMaffeiMC6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
