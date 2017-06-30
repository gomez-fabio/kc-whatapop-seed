import { TestBed, inject } from '@angular/core/testing';

import { FavsService } from './favs.service';

describe('FavsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavsService]
    });
  });

  it('should be created', inject([FavsService], (service: FavsService) => {
    expect(service).toBeTruthy();
  }));
});
