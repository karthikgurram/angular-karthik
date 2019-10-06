import { TestBed } from '@angular/core/testing';

import { AddProductCanDeactivateService } from './add-product-can-deactivate.service';

describe('AddProductCanDeactivateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddProductCanDeactivateService = TestBed.get(AddProductCanDeactivateService);
    expect(service).toBeTruthy();
  });
});
