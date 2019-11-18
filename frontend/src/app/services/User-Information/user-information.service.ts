import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: "root"
})
export class UserInformationService {
  private userInfo: any = {};
  private URL = "http://localhost:3000/api/usuarios/";

  constructor(private http : HttpClient) { }

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'))
  }

  putUser(email,data) {
    return this.http.put(this.URL+ email, data)
  }

  changeImage(email: string, formData: FormData){
    const profileImage = `${this.URL}${email}/imagen`;
    return this.http.post(profileImage, formData);
  }

  cleanUser(){
    console.log("cleanUser")
    localStorage.removeItem('user');
  }

}


