import { TestBed } from '@angular/core/testing';

import { DeleteFavMovieService } from './delete-fav-movie.service';

describe('DeleteFavMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteFavMovieService = TestBed.get(DeleteFavMovieService);
    expect(service).toBeTruthy();
  });
});
