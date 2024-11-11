import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FP1217Component } from './fp1217.component';

describe('FP1217Component', () => {
  let component: FP1217Component;
  let fixture: ComponentFixture<FP1217Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FP1217Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FP1217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
