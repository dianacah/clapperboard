import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"]
})
export class PeliculasComponent implements OnInit {
  public generos = ["Drama", "Comedia", "Romance", "Anime"];
  public drama = [
    {
      nombre: " A los trece",
      imagen: "../../assets/home/images/Drama/ALosTrece.jpg"
    },
    {
      nombre: " A los trece",
      imagen: "../../assets/home/images/Drama/ALosTrece.jpg"
    },
    {
      nombre: " A los trece",
      imagen: "../../assets/home/images/Drama/ALosTrece.jpg"
    },
    {
      nombre: " A los trece",
      imagen: "../../assets/home/images/Drama/ALosTrece.jpg"
    },
    {
      nombre: " A los trece",
      imagen: "../../assets/home/images/Drama/ALosTrece.jpg"
    },
    {
      nombre: " A los trece",
      imagen: "../../assets/home/images/Drama/ALosTrece.jpg"
    },
    {
      nombre: " A los trece",
      imagen: "../../assets/home/images/Drama/ALosTrece.jpg"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
