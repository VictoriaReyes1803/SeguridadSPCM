import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistKraussMaffeiComponent } from './checklist-krauss-maffei.component';

describe('ChecklistKraussMaffeiComponent', () => {
  let component: ChecklistKraussMaffeiComponent;
  let fixture: ComponentFixture<ChecklistKraussMaffeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistKraussMaffeiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistKraussMaffeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
