import { TestBed } from '@angular/core/testing';

import { ViewProductServiceService } from './view-product-service.service';

describe('ViewProductServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewProductServiceService = TestBed.get(ViewProductServiceService);
    expect(service).toBeTruthy();
  });
});
