import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserInformationService {
  private userInfo: any = {};

  constructor() { }

  setUser(user) {
    this.userInfo = user;
  }

  getUser() {
    return this.userInfo;
  }

  putUser() {
    return this.userInfo
  }
  /* 
  setInformation(user) {
    this.userInformation = user;
    console.log(this.userInformation)
  }
  
  getInformation() {
    return this.userInformation;
  }  */
}
