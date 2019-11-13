import { RegistryUserService } from "./../../services/Registry/registry-user.service";
import { UserInformationService } from "./../../services/User-Information/user-information.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  guardarInformacion: any = {};
  public fechaActual: Date = new Date();
  public menorEdad: boolean = false;
  constructor(
    private builder: FormBuilder,
    private userInformationService: UserInformationService,
    private registryUserService: RegistryUserService,
    private router: Router
  ) {}

  signupForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    email: ["", Validators.compose([Validators.required, Validators.email])],
    date: ["", Validators.compose([Validators.required])],
    password: [
      "",
      Validators.compose([Validators.required, Validators.minLength(6)])
    ]
  });

  enviarInformacion(signupForm) {
    console.log(this.fechaActual);
    let fechaRegistro = signupForm.value.date;
    let añoRegistro = parseInt(fechaRegistro.substr(0, 4));
    let mesRegistro = parseInt(fechaRegistro.substr(5, 2));
    let diaRegistro = parseInt(fechaRegistro.substr(8, 2));
    let añoActual = this.fechaActual.getFullYear();
    let mesActual = this.fechaActual.getMonth();
    let diaActual = this.fechaActual.getDay();
    let años = añoActual - añoRegistro;
    let meses = mesActual - mesRegistro;
    let dia = diaActual - diaRegistro;
    console.log("año", años, "mes", meses, "dia", dia);
    let usuarioNuevo = signupForm.value;
    if (años >= 18) {
      this.registryUserService
        .postRegistry(usuarioNuevo)
        .subscribe((response = {}) => {
          this.guardarInformacion = response;
          this.userInformationService.setUser(this.guardarInformacion);
          this.router.navigate(["/perfil"]);
        });
    } else {
      this.menorEdad = true;
    }
  }

  ngOnInit() {}
}
