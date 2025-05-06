import { TestBed } from '@angular/core/testing';

import { RevisionBusService } from './revision-bus.service';

describe('RevisionBusService', () => {
  let service: RevisionBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevisionBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
