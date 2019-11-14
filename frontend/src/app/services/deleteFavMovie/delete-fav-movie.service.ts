import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeleteFavMovieService {
  private URL = "http://localhost:3000/api/usuarios/";
  private finalruta = "/movie"
  constructor(private http: HttpClient) { }

  deleteFavorito(email,data) {
    
      let fullURL = this.URL + email + this.finalruta;
      console.log(fullURL);
      return this.http.delete(fullURL, data);
    
  }

}
