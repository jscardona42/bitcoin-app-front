import { TestBed } from '@angular/core/testing';

import { BitcoinsService } from './bitcoins.service';

describe('BitcoinsService', () => {
  let service: BitcoinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitcoinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
