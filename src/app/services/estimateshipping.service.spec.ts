import { TestBed } from '@angular/core/testing';

import { EstimateshippingService } from './estimateshipping.service';

describe('EstimateshippingService', () => {
  let service: EstimateshippingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstimateshippingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
