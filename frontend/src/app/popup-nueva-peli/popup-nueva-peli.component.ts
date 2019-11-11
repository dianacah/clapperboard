import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-popup-nueva-peli",
  templateUrl: "./popup-nueva-peli.component.html",
  styleUrls: ["./popup-nueva-peli.component.css"]
})
export class PopupNuevaPeliComponent implements OnInit {
  constructor(private builder: FormBuilder) {}

  newMovieForm: FormGroup = this.builder.group({
    title: ["", Validators.required],
    genre: ["", Validators.required],
    director: ["", Validators.required],
    duration: ["", Validators.required],
    actors: ["", Validators.required],
    file: ["", Validators.required],
    image: ["", Validators.required],
    synopsis: ["", Validators.required]
  });

  ngOnInit() {}
}
