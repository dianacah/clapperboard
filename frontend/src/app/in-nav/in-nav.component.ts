import { Component, OnInit } from "@angular/core";
import { UserInformationService } from "../services/User-Information/user-information.service";

@Component({
  selector: "app-in-nav",
  templateUrl: "./in-nav.component.html",
  styleUrls: ["./in-nav.component.css"]
})
export class InNavComponent implements OnInit {
  public user;
  public userName;
  public navName;

  constructor(private userInformationService: UserInformationService) {}

  ngOnInit() {
    this.user = this.userInformationService.getUser();
    this.userName = this.user.name;

    this.navName = this.user.name.split(" ", 1);
  }
}
