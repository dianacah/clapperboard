import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "./../../services/Login/login.service";
import { Router } from "@angular/router";
import { UserInformationService } from "./../../services/User-Information/user-information.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public passwordDB;
  public wrongPass: boolean = false;
  public noRegistrado: boolean = true;
  public role;

  constructor(
    private builder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private userInformationService: UserInformationService
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
        this.wrongPass = false;
        this.noRegistrado = false;
      } else if (response != null) {
        this.passwordDB = response.password;
        this.noRegistrado = true;
        if (user.password != this.passwordDB) {
          this.wrongPass = true;
        } else {
          console.log("ingreso correcto");
          this.userInformationService.setUser(response);
          this.role = response.role;
          if (this.role == "normal") {
            this.router.navigate(["/ver-peliculas"]);
          } else {
            this.router.navigate(["/admin"]);
          }
        }
      }
    });
  }

  ngOnInit() {
    console.log(this.wrongPass, this.noRegistrado);
  }
}
