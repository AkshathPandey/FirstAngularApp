import { TestBed } from '@angular/core/testing';

import { BikeserviceService } from './bikeservice.service';

describe('BikeserviceService', () => {
  let service: BikeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
