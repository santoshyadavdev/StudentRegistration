import { TestBed, inject } from '@angular/core/testing';

import { LoginproviderService } from './loginprovider.service';

describe('LoginproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginproviderService]
    });
  });

  it('should ...', inject([LoginproviderService], (service: LoginproviderService) => {
    expect(service).toBeTruthy();
  }));
});
