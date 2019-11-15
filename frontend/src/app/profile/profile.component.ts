import { UserInformationService } from "./../services/User-Information/user-information.service";
import { PopupEditUserComponent } from "./../popup-edit-user/popup-edit-user.component";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  MatDialog,
  MatDialogConfig,
  MatTableDataSource
} from "@angular/material";
import { from } from "rxjs";

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
  public popup;

  constructor(
    private builder: FormBuilder,
    private dialog: MatDialog,
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
      this.name = this.user.name.split(" ", 1);
      this.email = this.user.email;
      this.date = this.user.date;
      this.password = this.user.password;
      this.description = this.user.description;
      console.log("nombre", this.name, "bandera", this.carga);
      this.carga = false;
      this.ngOnInit();
    }, 200);
  }
  putUser() {
    setTimeout(() => {
      this.user = this.userInformationService.putUser(this.user);
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

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "800px";
    dialogConfig.height = "680px";
    return dialogConfig;
  }

  mostarUsuario(user) {
    let dialogConfig = this.openDialog();
    /* dialogConfig.data = {
      name: user.name,
      email: user.email,
      date: user.date,
      password: user.password,
      description: user.description,
    };  */
    this.popup = this.dialog.open(PopupEditUserComponent, dialogConfig);
    this.popup.afterClosed().subscribe(response => {
      let respuesta = response.value;
      this.userInformationService.getUser();
      this.getUser();
    });
  }
  mostrarInfo(user) {
    this.userInformationService.getUser().subscribe(res => {
      this.ngOnInit();
    });
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
