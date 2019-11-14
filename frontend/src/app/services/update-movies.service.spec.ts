import { TestBed } from '@angular/core/testing';

import { UpdateMoviesService } from './update-movies.service';

describe('UpdateMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateMoviesService = TestBed.get(UpdateMoviesService);
    expect(service).toBeTruthy();
  });
});
