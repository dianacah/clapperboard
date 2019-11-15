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
    }, 0);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "700px";
    dialogConfig.height = "550px";
    dialogConfig.data = {
      user: this.user
    }
    return dialogConfig;
  }

  mostarUsuario(user) {
    let dialogConfig = this.openDialog();
    this.popup = this.dialog.open(PopupEditUserComponent, dialogConfig);
    this.popup.afterClosed().subscribe(response => {
     console.log(response);
     this.userInformationService.putUser(this.user.email,response.value).subscribe(response=>{
       console.log(response);
       this.userInformationService.setUser(response);
       this.ngOnInit();
     })
    });
  }
  mostrarInfo(user) {
    this.userInformationService.getUser().subscribe(res => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.getUser();
  }
}
