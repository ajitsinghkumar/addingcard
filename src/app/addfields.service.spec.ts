import { TestBed } from '@angular/core/testing';

import { AddfieldsService } from './addfields.service';

describe('AddfieldsService', () => {
  let service: AddfieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddfieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
