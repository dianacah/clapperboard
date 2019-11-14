import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UpdateMoviesService {
  private URL = "http://localhost:3000/api/peliculas/"

  constructor(private http: HttpClient) { }

  updateMovie(id, data) {
    console.log("url", this.URL + id, "datos", data)
    return this.http.put(this.URL + id, data)
  }

}
