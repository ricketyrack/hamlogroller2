import { TestBed } from '@angular/core/testing';

import { SkccService } from './skcc.service';

describe('SkccService', () => {
  let service: SkccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
