import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDoeComponent } from './header-doe.component';

describe('HeaderDoeComponent', () => {
  let component: HeaderDoeComponent;
  let fixture: ComponentFixture<HeaderDoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDoeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
