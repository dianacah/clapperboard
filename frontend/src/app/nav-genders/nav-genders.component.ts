import { Component, OnInit } from "@angular/core";
import { UserInformationService } from "./../services/User-Information/user-information.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav-genders",
  templateUrl: "./nav-genders.component.html",
  styleUrls: ["./nav-genders.component.css"]
})
export class NavGendersComponent implements OnInit {
  public user;
  public userName;
  public navName;
  public userImage;
  public showAvatar = false;

  constructor(
    private userInformationService: UserInformationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.userInformationService.getUser();
    this.userName = this.user.name;

    this.navName = this.user.name.split(" ", 1);
    this.userImage = `http://localhost:3000/public/${this.user.image}`;
    this.showAvatar = this.user.image ? true : false;
  }

  logOut() {
    this.userInformationService.cleanUser();
    this.router.navigate(["/home"]);
  }
}
