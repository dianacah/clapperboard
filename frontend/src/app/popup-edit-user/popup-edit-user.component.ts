import { Component, OnInit, Inject } from '@angular/core';
import { UserInformationService } from "./../services/User-Information/user-information.service";
import { MatDialog, MatDialogConfig, MatTableDataSource} from "@angular/material";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { getDefaultService } from 'selenium-webdriver/chrome';

@Component({
  selector: 'app-popup-edit-user',
  templateUrl: './popup-edit-user.component.html',
  styleUrls: ['./popup-edit-user.component.css']
})
export class PopupEditUserComponent implements OnInit {

  public user;
  public name;
  public email;
  public date;
  public password;
  public carga: boolean = true;
  public description;
  public perfilForm: FormGroup;
  constructor(
    private builder: FormBuilder,
    private dialogRef: MatDialogRef<PopupEditUserComponent>,
    private userInformationService: UserInformationService,
    private dialog : MatDialog) 
  {}
 /*  perfilForm: FormGroup = this.builder.group({
    name : this.name = this.user.name,
    email: this.email = this.user.email,
    date: this.date = this.user.date,
    password: this.password = this.user.password,
    description: this.description = this.user.description,
  }); */

  OnSubmit(){
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
    
    this.close();
    this.userInformationService.getUser().subscribe(res => {
      this.ngOnInit();
    });
  }
  close() {
    this.dialogRef.close(this.perfilForm); 
  }
  ngOnInit() {
    /* if (this.carga) {
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
    }); */
  }
}
