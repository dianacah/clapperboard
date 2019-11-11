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
      director: "Catherine Hardwicke",
      duration: "2:00",
      genre: "Drama",
      actors: "Holly Hunter, Evan Rachel Wood, Nikki Reed, Jeremy Sisto",
      file: "./../",
      image: "../../assets/home/images/Drama/ALosTrece.jpg",
      synopsis:
        "Honor student Tracy Freeland (Evan Rachel Wood) has a troubling home life, but she is close to her mother, Melanie (Holly Hunter). While trying to conceal her inner turmoil by excelling academically, she befriends the calculating Evie (Nikki Reed), her school's queen bee. Evie talks Tracy into experimenting with drugs, exploring her sexuality and pickpocketing strangers to finance shopping sprees -- but before long, Melanie realizes she must step in and stop her daughter's destructive lifestyle.",
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
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
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
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
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
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
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
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
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
    }
  ];
  public popup;
  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "800px";
    dialogConfig.height = "680px";
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
