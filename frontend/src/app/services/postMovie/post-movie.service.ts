import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostMovieService {

  private URL="http://localhost:3000/api/peliculas/";

  constructor(private http: HttpClient) { }

  getMovie(){
    console.log("funciona");
    return this.http.get(this.URL);
  }
  deleteMovie(idMovie) {
    return this.http.delete(this.URL + idMovie);
  }
  updateMoviedb(movie, datos) {
    console.log("movie", movie, datos);
    console.log("url", this.URL + movie);
    return this.http.patch(this.URL + movie, datos);
  }
  addMovie(movie) {
    return this.http.post(this.URL, movie);
  }


}
