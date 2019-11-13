import { TestBed } from '@angular/core/testing';

import { PutFavoritosService } from './put-favoritos.service';

describe('PutFavoritosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PutFavoritosService = TestBed.get(PutFavoritosService);
    expect(service).toBeTruthy();
  });
});
