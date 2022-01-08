import { TestBed } from '@angular/core/testing';

import { FakedataserviceService } from './fakedataservice.service';

describe('FakedataserviceService', () => {
  let service: FakedataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakedataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
