import { TestBed } from '@angular/core/testing';

import { MobileserviceService } from './mobileservice.service';

describe('MobileserviceService', () => {
  let service: MobileserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
