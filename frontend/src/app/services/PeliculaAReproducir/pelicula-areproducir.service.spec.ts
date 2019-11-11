import { TestBed } from '@angular/core/testing';

import { PeliculaAReproducirService } from './pelicula-areproducir.service';

describe('PeliculaAReproducirService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeliculaAReproducirService = TestBed.get(PeliculaAReproducirService);
    expect(service).toBeTruthy();
  });
});
