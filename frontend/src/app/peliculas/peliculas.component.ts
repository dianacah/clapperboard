import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"]
})
export class PeliculasComponent implements OnInit {
  public generos = ["comedia", "romance"];
  constructor() {}

  ngOnInit() {}
}
