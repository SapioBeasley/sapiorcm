import { TestBed } from '@angular/core/testing';

import { PokitdokService } from './pokitdok.service';

describe('PokitdokService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokitdokService = TestBed.get(PokitdokService);
    expect(service).toBeTruthy();
  });
});
