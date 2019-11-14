import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PutFavoritosService {
  private URL = "http://localhost:3000/api/usuarios/";
  private finalruta = "/movies";
  constructor(private http: HttpClient) {}

  putFavorito(email, data) {
    console.log(email, data);
    let fullURL = this.URL + email + this.finalruta;
    console.log(fullURL);
    return this.http.patch(fullURL, data);
  }
}
