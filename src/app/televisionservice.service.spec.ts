import { TestBed } from '@angular/core/testing';

import { TelevisionserviceService } from './televisionservice.service';

describe('TelevisionserviceService', () => {
  let service: TelevisionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelevisionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
