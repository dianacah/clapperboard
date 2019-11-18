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
import { any } from "prop-types";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  public userForm;
  public user;
  public name;
  public email;
  public date;
  public password;
  public perfilForm: FormGroup;
  public carga: boolean = true;
  public description;
  public popup;
  public files: FileList;
  public imagenUsuario = "../../assets/profile/avatar.png";

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private userInformationService: UserInformationService,
    private router: Router
  ) {
    this.imageChange();
  }

  imageChange() {
    this.perfilForm = this.formBuilder.group({
      cambiarImagen: [""]
    });
  }

  getUser() {
    setTimeout(() => {
      this.user = this.userInformationService.getUser();
      console.log("respuesta servicio", this.user);
      this.userForm = this.user.name.split(" ", 1);
      this.name = this.user.name;
      this.email = this.user.email;
      this.date = this.user.date;
      this.password = this.user.password;
      this.description = this.user.description;
      this.imagenUsuario = this.user.image
        ? `http://localhost:3000/public/${this.user.image}`
        : this.imagenUsuario;
      console.log("nombre", this.name, "bandera", this.carga);
      this.carga = false;
    }, 0);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "500px";
    dialogConfig.height = "550px";
    dialogConfig.data = {
      user: this.user
    };
    return dialogConfig;
  }

  mostarUsuario(user) {
    let dialogConfig = this.openDialog();
    this.popup = this.dialog.open(PopupEditUserComponent, dialogConfig);
    this.popup.afterClosed().subscribe(response => {
      console.log(response);
      this.userInformationService
        .putUser(this.user.email, response.value)
        .subscribe(response => {
          console.log(response);
          this.userInformationService.setUser(response);
          this.ngOnInit();
        });
    });
  }

  saveImageProfile() {
    let formData: FormData = new FormData();
    Array.from(this.files).forEach(file => {
      formData.append("image", file, file.name);
    });
    console.log("file", this.files);
    console.log("formData", formData);

    this.userInformationService
      .changeImage(this.email, formData)
      .subscribe((res: any) => {
        console.log("resppppp", res);
        this.userInformationService.setUser(res.usuario);
        this.imagenUsuario = `http://localhost:3000/public/${res.usuario.image}`;
      });
  }

  openFileBrowser($event) {
    const element: HTMLElement = document.getElementById(
      "fileInput"
    ) as HTMLElement;
    element.click();
  }

  filesChosen($event) {
    this.files = $event.target.files;
  }

  mostrarInfo(user) {
    this.userInformationService.getUser().subscribe(res => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.getUser();
  }

  logOut() {
    this.userInformationService.cleanUser();
    this.router.navigate(["/home"]);
  }
}
