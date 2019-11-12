import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "./../../services/Login/login.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private loginService: LoginService
  ) {}

  loginForm: FormGroup = this.builder.group({
    email: ["", Validators.compose([Validators.required, Validators.email])],
    password: ["", Validators.required]
  });

  getUsuario(usuario) {
    let user = usuario.value;
    let email = user.email;
    console.log(user);
    this.loginService.getLogin(email).subscribe(e => {
      console.log(e);
    });
  }

  ngOnInit() {}
}
