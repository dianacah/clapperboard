import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GetMovieService {
  private URL = "http://localhost:3000/api/peliculas/";

  constructor(private http: HttpClient) {}

  getMovie() {
    return this.http.get(this.URL);
  }
}
