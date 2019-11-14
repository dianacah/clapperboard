import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeleteFavMovieService {
  private URL = "http://localhost:3000/api/usuarios/";
  constructor(private http: HttpClient) { }

  deleteFavorito() {
   
    
  }

}
