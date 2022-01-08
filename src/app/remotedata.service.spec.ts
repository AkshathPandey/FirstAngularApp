import { TestBed } from '@angular/core/testing';

import { RemotedataService } from './remotedata.service';

describe('RemotedataService', () => {
  let service: RemotedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemotedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
