import { TestBed, inject } from '@angular/core/testing';

import { FindTrajetDateService } from './find-trajet-date.service';

describe('FindTrajetDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindTrajetDateService]
    });
  });

  it('should be created', inject([FindTrajetDateService], (service: FindTrajetDateService) => {
    expect(service).toBeTruthy();
  }));
});
