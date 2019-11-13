import { GetMovieService } from './../services/getMovie/get-movie.service';
import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogConfig,
  MatTableDataSource
} from "@angular/material";
import { PopupInfoPeliComponent } from "./../popup-info-peli/popup-info-peli.component";
import { PeliculaAReproducirService } from "./../services/PeliculaAReproducir/pelicula-areproducir.service";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"]
})
export class PeliculasComponent implements OnInit {
  
  public infoMovies: any = [];

  public generos = ["Drama", "Comedia", "Romance", "Anime"];
  public drama = [
    {
      title: " A los trece",
      director: "Catherine Hardwicke",
      duration: "2:00",
      genre: "Drama",
      actors: "Holly Hunter, Evan Rachel Wood, Nikki Reed, Jeremy Sisto",
      file: "https://www.youtube.com/embed/yg1U88BiZZ0",
      image: "../../assets/home/images/Drama/ALosTrece.jpg",
      synopsis:
        "Honor student Tracy Freeland (Evan Rachel Wood) has a troubling home life, but she is close to her mother, Melanie (Holly Hunter). While trying to conceal her inner turmoil by excelling academically, she befriends the calculating Evie (Nikki Reed), her school's queen bee. Evie talks Tracy into experimenting with drugs, exploring her sexuality and pickpocketing strangers to finance shopping sprees -- but before long, Melanie realizes she must step in and stop her daughter's destructive lifestyle.",
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
    },
    {
      title: " Amelie",
      director: "Jean-Pierre Jeunet",
      duration: "2:00",
      genre: "Drama",
      actors: "Audrey Tautou, Mathieu Kassovitz",
      file: "./../",
      image: "../../assets/home/images/Drama/Amelie.jpg",
      synopsis:
        "'Amélie' is a fanciful comedy about a young woman who discretely orchestrates the lives of the people around her, creating a world exclusively of her own making. Shot in over 80 Parisian locations, acclaimed director Jean-Pierre Jeunet (Delicatessen; The City of Lost Children) invokes his incomparable visionary style to capture the exquisite charm and mystery of modern-day Paris through the eyes of a beautiful ingenue",
      trailer: "https://www.youtube.com/embed/HUECWi5pX7o"
    },
    {
      title: " El cisne negro",
      director: "Christian",
      duration: "2:00",
      genre: "Drama",
      actors: "lllll, kkkkkk",
      file: "./../",
      image: "../../assets/home/images/Drama/CisneNegro.jpg",
      synopsis: "Lorem ipsum lorem ipsum",
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
    },
    {
      title: " La decicion de Anne",
      director: "Christian",
      duration: "2:00",
      genre: "Drama",
      actors: "lllll, kkkkkk",
      file: "./../",
      image: "../../assets/home/images/Drama/LaDecisionDeAnne.jpg",
      synopsis: "Lorem ipsum lorem ipsum",
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
    },
    {
      title: " Mentes Peligrosas",
      director: "Christian",
      duration: "2:00",
      genre: "Drama",
      actors: "lllll, kkkkkk",
      file: "./../",
      image: "../../assets/home/images/Drama/MentesPeligrosas.jpg",
      synopsis: "Lorem ipsum lorem ipsum",
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
    },
    {
      title: " Mi chica",
      director: "Christian",
      duration: "2:00",
      genre: "Drama",
      actors: "lllll, kkkkkk",
      file: "./../",
      image: "../../assets/home/images/Drama/MiChica.jpg",
      synopsis: "Lorem ipsum lorem ipsum",
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
    },
    {
      title: " Noviembre Dulce",
      director: "Christian",
      duration: "2:00",
      genre: "Drama",
      actors: "lllll, kkkkkk",
      file: "./../",
      image: "../../assets/home/images/Drama/NoviembreDulce.jpg",
      synopsis: "Lorem ipsum lorem ipsum",
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
    },
    {
      title: " Orgullo y prejuicio",
      director: "Christian",
      duration: "2:00",
      genre: "Drama",
      actors: "lllll, kkkkkk",
      file: "./../",
      image: "../../assets/home/images/Drama/OrgulloYPrejuicio.jpg",
      synopsis: "Lorem ipsum lorem ipsum",
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
    },
    {
      title: " Un paseo para recordar",
      director: "Christian",
      duration: "2:00",
      genre: "Drama",
      actors: "lllll, kkkkkk",
      file: "./../",
      image: "../../assets/home/images/Drama/UnPaseoParaRecordar.jpg",
      synopsis: "Lorem ipsum lorem ipsum",
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
    }
  ];
  public popup;
  constructor(
    private getMovieService: GetMovieService,
    private dialog: MatDialog,
    private peliculaAReproducirService: PeliculaAReproducirService
  ) {}

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
      let respuesta = response;
      this.peliculaAReproducirService.setMovie(respuesta);
    });
  }

  getInfoMovie() {
    this.getMovieService.getMovie().subscribe((res = {}) => {
      this.infoMovies = res;
      console.log("respuesta", this.infoMovies)
    })
  }
  ngOnInit() {
    this.getInfoMovie()
  }
}
