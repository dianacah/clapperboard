import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(private builder: FormBuilder) {}

  perfilForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    email: ["", Validators.compose([Validators.required, Validators.email])],
    date: ["", Validators.required],
    password: ["", Validators.required],
    description: [""]
  });

  ngOnInit() {}
}
