import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KMTEC2022MX056V2Component } from './kmtec2022-mx-056-v2.component';

describe('KMTEC2022MX056V2Component', () => {
  let component: KMTEC2022MX056V2Component;
  let fixture: ComponentFixture<KMTEC2022MX056V2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KMTEC2022MX056V2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KMTEC2022MX056V2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
