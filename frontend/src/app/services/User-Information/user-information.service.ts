import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  public userInformation;

  constructor() { }

  setInformation(user) {
    this.userInformation = user;
    console.log(this.userInformation)
  }

  getInformation() {
    return this.userInformation;
  }
}
