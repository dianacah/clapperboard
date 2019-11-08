import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistryUserService {
  private URL="http://localhost:3000/api/usuarios/";

  constructor(private http: HttpClient) { }

  postRegistry(users){
    return this.http.post(this.URL, users)
  }
}
