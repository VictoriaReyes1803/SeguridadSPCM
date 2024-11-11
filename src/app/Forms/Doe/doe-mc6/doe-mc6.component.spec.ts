import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoeMc6Component } from './doe-mc6.component';

describe('DoeMc6Component', () => {
  let component: DoeMc6Component;
  let fixture: ComponentFixture<DoeMc6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoeMc6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoeMc6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
