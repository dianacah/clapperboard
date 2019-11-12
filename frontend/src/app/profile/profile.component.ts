import { UserInformationService } from './../services/User-Information/user-information.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


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

  constructor(private builder: FormBuilder, private userInformationService : UserInformationService) {}

  perfilForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    email: ["", Validators.compose([Validators.required, Validators.email])],
    date: ["", Validators.required],
    password: ["", Validators.required],
    description: [""]
  });

  ngOnInit() {
    this.user = this.userInformationService.getUser();
    
  }
}
