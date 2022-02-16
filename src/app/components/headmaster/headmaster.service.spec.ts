import { TestBed } from '@angular/core/testing';

import { HeadmasterService } from './headmaster.service';

describe('HeadmasterService', () => {
  let service: HeadmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
