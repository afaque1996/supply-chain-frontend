import { TestBed } from '@angular/core/testing';

import { StockyardService } from './stockyard.service';

describe('StockyardService', () => {
  let service: StockyardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockyardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
