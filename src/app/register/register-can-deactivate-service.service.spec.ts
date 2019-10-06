import { TestBed } from '@angular/core/testing';

import { RegisterCanDeactivateServiceService } from './register-can-deactivate-service.service';

describe('RegisterCanDeactivateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterCanDeactivateServiceService = TestBed.get(RegisterCanDeactivateServiceService);
    expect(service).toBeTruthy();
  });
});
