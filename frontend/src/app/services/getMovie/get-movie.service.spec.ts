import { TestBed } from '@angular/core/testing';

import { GetMovieService } from './get-movie.service';

describe('GetMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetMovieService = TestBed.get(GetMovieService);
    expect(service).toBeTruthy();
  });
});
