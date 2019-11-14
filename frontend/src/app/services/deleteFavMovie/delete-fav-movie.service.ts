import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DeleteFavMovieService {
  private URL = "http://localhost:3000/api/usuarios/";
  private finalruta = "/movies";
  constructor(private http: HttpClient) {}
  public datos: any;
  deleteFavorito(email, movieId) {
    let fullURL = this.URL + email + this.finalruta + "/" + movieId;
    console.log("info servicio", fullURL);
    return this.http.delete(fullURL);
  }
}
