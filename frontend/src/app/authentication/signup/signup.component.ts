import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private builder: FormBuilder) {}

  signupForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    email: ["", Validators.compose([Validators.required, Validators.email])],
    date: ["", Validators.compose([Validators.required])],
    password: [
      "",
      Validators.compose([Validators.required, Validators.minLength(6)])
    ]
  });

  ngOnInit() {}
}
