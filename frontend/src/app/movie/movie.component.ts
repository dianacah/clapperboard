import { Component, OnInit } from "@angular/core";
import { PeliculaAReproducirService } from "./../services/PeliculaAReproducir/pelicula-areproducir.service";
import { DomSanitizer } from "@angular/platform-browser";
import { GetMovieService } from "../services/getMovie/get-movie.service";
import { UserInformationService } from "./../services/User-Information/user-information.service";
import { PutFavoritosService } from "./../services/putfavoritos/put-favoritos.service";
import { DeleteFavMovieService } from "../services/deleteFavMovie/delete-fav-movie.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  public interestingMovies: any = [];
  public infoMovies: any = [];
  public movie;
  public title;
  public genre;
  public myGenre;
  public duration;
  public synopsis;
  public file;
  public useri;
  public esFavorito: boolean = false;
  public idPelicula: any = {};

  constructor(
    private deleteFavMovieService: DeleteFavMovieService,
    private putFavoritosService: PutFavoritosService,
    private userInformationService: UserInformationService,
    private getMovieService: GetMovieService,
    private sanitizer: DomSanitizer,
    private peliculaAReproducirService: PeliculaAReproducirService
  ) {}

  getMovies() {
    this.getMovieService.getMovie().subscribe((res = {}) => {
      this.infoMovies = res;
      this.interestingMovies = this.infoMovies.filter(isMovie => {
        return isMovie.genre == this.genre;
      });
      console.log(
        "estas son las películas de interes",
        this.genre,
        this.interestingMovies
      );
    });
  }

  enviarFavorito() {
    if (this.esFavorito) {
      this.eliminarFavorito(this.movie);
    } else {
      this.agregarFavorito(this.movie);
    }
  }
  agregarFavorito(movie) {
    let peliFav = { movieId: movie.movieId };
    this.putFavoritosService
      .putFavorito(this.useri.email, peliFav)
      .subscribe((response = {}) => {
        this.userInformationService.setUser(response);
        this.ngOnInit();
      });
  }

  eliminarFavorito(movie) {
    let email = this.useri.email;
    this.idPelicula = { movieId: movie.movieId };
    this.deleteFavMovieService
      .deleteFavorito(email, this.idPelicula.movieId)
      .subscribe(response => {
        this.userInformationService.setUser(response);
        this.ngOnInit();
      });
  }
  validarFavorito() {
    this.useri = this.userInformationService.getUser();
    let busqueda = this.useri.favoriteMovies.filter(pelicula => {
      return pelicula._id == this.movie.movieId;
    });
    if (busqueda.length > 0) {
      this.esFavorito = true;
    } else {
      this.esFavorito = false;
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.movie = this.peliculaAReproducirService.getMovie();
      this.title = this.movie.title;
      this.genre = this.movie.genre;
      this.duration = this.movie.duration;
      this.synopsis = this.movie.synopsis;
      this.file = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.movie.file
      );
      this.validarFavorito();
      this.getMovies();
    }, 200);
  }
}
