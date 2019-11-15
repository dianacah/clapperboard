import { Component, OnInit, Inject } from '@angular/core';
import { UserInformationService } from "./../services/User-Information/user-information.service";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
  constructor(
    private builder: FormBuilder,
    private dialogRef: MatDialogRef<PopupEditUserComponent>,
    private userInformationService: UserInformationService,
    private dialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) data ) 
  {
    this.user = data.user;
  }
  actualizarUserForm : FormGroup = this.builder.group({
    name : [this.name]


  })

  perfilForm: FormGroup = this.builder.group({
    name: ["", Validators.compose([Validators.required])],
    email: [""],
    date: [""],
    password: [""],
    description: [""]
  });

  OnSubmit(perfilForm){
    this.close();
  }
  close() {
    this.dialogRef.close(this.perfilForm); 
  }
  ngOnInit() {
  }
}
