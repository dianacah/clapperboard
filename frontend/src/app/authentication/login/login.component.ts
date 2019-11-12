import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "./../../services/Login/login.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public passwordDB;
  public wrongPass: boolean = true;
  public noRegistrado: boolean = true;

  constructor(
    private builder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  loginForm: FormGroup = this.builder.group({
    email: ["", Validators.compose([Validators.required, Validators.email])],
    password: ["", Validators.required]
  });

  getUsuario(usuario) {
    let user = usuario.value;
    let email = user.email;
    this.loginService.getLogin(email).subscribe((response: any) => {
      console.log("usuario", response);
      if (response == null) {
      }
      this.passwordDB = response.password;
      if (user.password != this.passwordDB) {
        this.router.navigate(["/welcome"]);
        this.wrongPass = false;
      } else {
        this.router.navigate(["/perfil"]);
      }
    });
  }

  ngOnInit() {}
}
