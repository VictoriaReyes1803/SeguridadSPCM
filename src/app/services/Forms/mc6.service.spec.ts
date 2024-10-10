import { TestBed } from '@angular/core/testing';

import { Mc6Service } from './mc6.service';

describe('Mc6Service', () => {
  let service: Mc6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mc6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
