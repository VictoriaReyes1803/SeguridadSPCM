import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechklistKMTEC056V2Component } from './chechklist-kmtec-056-v2.component';

describe('ChechklistKMTEC056V2Component', () => {
  let component: ChechklistKMTEC056V2Component;
  let fixture: ComponentFixture<ChechklistKMTEC056V2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChechklistKMTEC056V2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChechklistKMTEC056V2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
