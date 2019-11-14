import { TestBed } from '@angular/core/testing';

import { PostMovieService } from './post-movie.service';

describe('PostMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostMovieService = TestBed.get(PostMovieService);
    expect(service).toBeTruthy();
  });
});
