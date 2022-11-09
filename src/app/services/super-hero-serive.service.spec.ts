import { TestBed } from '@angular/core/testing';

import { SuperHeroSeriveService } from './super-hero-serive.service';

describe('SuperHeroSeriveService', () => {
  let service: SuperHeroSeriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperHeroSeriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
