import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PostMovieService {
  private URL = "http://localhost:3000/api/peliculas/";

  constructor(private http: HttpClient) {}

  getMovie() {
    return this.http.get(this.URL);
  }
  deleteMovie(idmovie) {
    return this.http.delete(this.URL + idmovie);
  }

  addMovie(movie) {
    return this.http.post(this.URL, movie);
  }
}
