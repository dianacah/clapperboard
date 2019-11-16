import { Component, OnInit, Inject } from "@angular/core";
import { UserInformationService } from "./../services/User-Information/user-information.service";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-popup-edit-user",
  templateUrl: "./popup-edit-user.component.html",
  styleUrls: ["./popup-edit-user.component.css"]
})
export class PopupEditUserComponent implements OnInit {
  public user;
  public name;
  public email;
  public date;
  public password;
  public carga: boolean = false;
  public description;
  perfilForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private dialogRef: MatDialogRef<PopupEditUserComponent>,
    private userInformationService: UserInformationService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  OnSubmit(perfilForm) {
    this.close();
  }
  close() {
    this.dialogRef.close(this.perfilForm);
  }
  ngOnInit() {
    this.user = this.data.user;
    this.name = this.user.name;
    this.email = this.user.email;
    this.date = this.user.date;
    this.password = this.user.password;
    this.description = this.user.description;
    this.perfilForm = this.builder.group({
      name: [this.name, Validators.compose([Validators.required])],
      email: [this.email],
      date: [this.date],
      password: [this.password],
      description: [this.description]
    });
  }
}
