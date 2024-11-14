import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderKMTEC056V2Component } from './header-kmtec-056-v2.component';

describe('HeaderKMTEC056V2Component', () => {
  let component: HeaderKMTEC056V2Component;
  let fixture: ComponentFixture<HeaderKMTEC056V2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderKMTEC056V2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderKMTEC056V2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
