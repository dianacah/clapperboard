import { UserInformationService } from "./../services/User-Information/user-information.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { getDefaultService } from "selenium-webdriver/chrome";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  userInformation: any = [];

  public user;
  public name;
  public email;
  public date;
  public password;
  public perfilForm: FormGroup;
  public carga: boolean = true;
  public description;
  constructor(
    private builder: FormBuilder,
    private userInformationService: UserInformationService
  ) {}

  /*  perfilForm: FormGroup = this.builder.group({
    name: [this.user.name, Validators.required],
    email: ["", Validators.compose([Validators.required, Validators.email])],
    date: ["", Validators.required],
    password: ["", Validators.required],
    description: [""]
  }); */

  getUser() {
    setTimeout(() => {
      this.user = this.userInformationService.getUser();
      console.log("respuesta servicio", this.user);
      this.name = this.user.name;
      this.email = this.user.email;
      this.date = this.user.date;
      this.password = this.user.password;
      this.description = this.user.description;
      console.log("nombre", this.name, "bandera", this.carga);
      this.carga = false;
      this.ngOnInit();
    }, 200);
  }

  ngOnInit() {
    if (this.carga) {
      this.getUser();
    }
    this.perfilForm = this.builder.group({
      name: [this.name, Validators.required],
      email: [
        this.email,
        Validators.compose([Validators.required, Validators.email])
      ],
      date: [this.date, Validators.required],
      password: [this.password, Validators.required],
      description: [this.description]
    });
  }
}
