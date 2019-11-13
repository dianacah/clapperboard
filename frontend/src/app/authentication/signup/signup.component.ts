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
    let usuarioNuevo = signupForm.value;
    this.registryUserService
      .postRegistry(usuarioNuevo)
      .subscribe((response = {}) => {
        this.guardarInformacion = response;
        this.userInformationService.setUser(this.guardarInformacion);
      });
  }

  ngOnInit() {}
}
