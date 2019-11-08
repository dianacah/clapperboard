import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogConfig,
  MatTableDataSource
} from "@angular/material";
import { PopupInfoPeliComponent } from "./../popup-info-peli/popup-info-peli.component";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"]
})
export class PeliculasComponent implements OnInit {
  public generos = ["Drama", "Comedia", "Romance", "Anime"];
  public drama = [
    {
      title: " A los trece",
      director: "Christian",
      duration: "2:00",
      genre: "Drama",
      actors: "lllll, kkkkkk",
      file: "./../",
      image: "../../assets/home/images/Drama/ALosTrece.jpg",
      synopsis: "Lorem ipsum lorem ipsum",
      trailer: "./../../"
    },
    {
      title: " A los trece",
      director: "Christian",
      duration: "2:00",
      genre: "Drama",
      actors: "lllll, kkkkkk",
      file: "./../",
      image: "../../assets/home/images/Drama/ALosTrece.jpg",
      synopsis: "Lorem ipsum lorem ipsum",
      trailer: "./../../"
    },
    {
      title: " A los trece",
      director: "Christian",
      duration: "2:00",
      genre: "Drama",
      actors: "lllll, kkkkkk",
      file: "./../",
      image: "../../assets/home/images/Drama/ALosTrece.jpg",
      synopsis: "Lorem ipsum lorem ipsum",
      trailer: "./../../"
    },
    {
      title: " A los trece",
      director: "Christian",
      duration: "2:00",
      genre: "Drama",
      actors: "lllll, kkkkkk",
      file: "./../",
      image: "../../assets/home/images/Drama/ALosTrece.jpg",
      synopsis: "Lorem ipsum lorem ipsum",
      trailer: "./../../"
    },
    {
      title: " A los trece",
      director: "Christian",
      duration: "2:00",
      genre: "Drama",
      actors: "lllll, kkkkkk",
      file: "./../",
      image: "../../assets/home/images/Drama/ALosTrece.jpg",
      synopsis: "Lorem ipsum lorem ipsum",
      trailer: "./../../"
    }
  ];
  public popup;
  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "400px";
    dialogConfig.height = "400px";
    return dialogConfig;
  }

  mostrarPelicula(pelicula) {
    let dialogConfig = this.openDialog();
    dialogConfig.data = {
      title: pelicula.title,
      director: pelicula.director,
      duration: pelicula.duration,
      genre: pelicula.genre,
      actors: pelicula.actors,
      file: pelicula.file,
      image: pelicula.image,
      synopsis: pelicula.synopsis,
      trailer: pelicula.trailer
    };
    this.popup = this.dialog.open(PopupInfoPeliComponent, dialogConfig);
    this.popup.afterClosed().subscribe(response => {
      let respuesta = response.value;
    });
  }

  ngOnInit() {}
}
