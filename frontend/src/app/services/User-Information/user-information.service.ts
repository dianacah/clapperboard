import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: "root"
})
export class UserInformationService {
  private userInfo: any = {};

  constructor(private http : HttpClient) { }

  setUser(user) {
    this.userInfo = user;
  }

  getUser() {
    return this.userInfo;
  }

  putUser(email) {
    return this.http.put(this.userInfo, email)
  }
}
