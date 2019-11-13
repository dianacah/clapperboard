import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PutFavoritosService {
  private URL = "http://localhost:3000/api/usuarios/";
  private finalruta = "/movies";
  putFavorito(email, data) {
    console.log(email, data);
    return this.http.patch(this.URL + email + this.finalruta, data);
  }
  constructor(private http: HttpClient) {}
}
