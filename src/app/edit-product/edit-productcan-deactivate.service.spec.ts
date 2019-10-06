import { TestBed } from '@angular/core/testing';

import { EditProductcanDeactivateService } from './edit-productcan-deactivate.service';

describe('EditProductcanDeactivateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditProductcanDeactivateService = TestBed.get(EditProductcanDeactivateService);
    expect(service).toBeTruthy();
  });
});
