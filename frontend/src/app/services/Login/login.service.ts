import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  private URL = "http://localhost:3000/api/usuarios/";

  constructor(private http: HttpClient) {}

  getLogin(email) {
    return this.http.get(this.URL + email);
  }
}
