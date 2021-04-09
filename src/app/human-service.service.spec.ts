import { TestBed } from '@angular/core/testing';

import { HumanServiceService } from './human-service.service';

describe('HumanServiceService', () => {
  let service: HumanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
