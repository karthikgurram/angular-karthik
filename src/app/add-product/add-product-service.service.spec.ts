import { TestBed } from '@angular/core/testing';

import { AddProductServiceService } from './add-product-service.service';

describe('AddProductServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddProductServiceService = TestBed.get(AddProductServiceService);
    expect(service).toBeTruthy();
  });
});
