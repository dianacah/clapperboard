import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PeliculaAReproducirService {
  public peliculaReproducir;
  constructor() {}

  setMovie(movie) {
    this.peliculaReproducir = movie;
  }

  getMovie() {
    return this.peliculaReproducir;
  }
}
