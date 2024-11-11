import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header1217Component } from './header-1217.component';

describe('Header1217Component', () => {
  let component: Header1217Component;
  let fixture: ComponentFixture<Header1217Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header1217Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header1217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
