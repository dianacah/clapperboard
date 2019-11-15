import { GetMovieService } from "./../services/getMovie/get-movie.service";
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
  public dramaMovies: any = [];
  public comedyMovies: any = [];
  public romanceMovies: any = [];
  public animeMovies: any = [];

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
    console.log("pelicula", pelicula);
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
      trailer: pelicula.trailer,
      movieId: pelicula._id
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

      this.dramaMovies = this.infoMovies.filter(movie => {
        return movie.genre == "Drama";
      });

      this.comedyMovies = this.infoMovies.filter(movie => {
        return movie.genre == "Comedia";
      });

      this.romanceMovies = this.infoMovies.filter(movie => {
        return movie.genre == "Romance";
      });

      this.animeMovies = this.infoMovies.filter(movie => {
        return movie.genre == "Anime";
      });
    });
  }
  ngOnInit() {
    this.getInfoMovie();
  }
}
