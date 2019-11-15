import { PutFavoritosService } from "./../services/putfavoritos/put-favoritos.service";
import { UserInformationService } from "./../services/User-Information/user-information.service";
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { DeleteFavMovieService } from "../services/deleteFavMovie/delete-fav-movie.service";

@Component({
  selector: "app-popup-info-peli",
  templateUrl: "./popup-info-peli.component.html",
  styleUrls: ["./popup-info-peli.component.css"]
})
export class PopupInfoPeliComponent implements OnInit {
  public movie;
  public srcMovie;
  public useri;
  public esFavorito: boolean = false;
  public idPelicula: any = {};
  enviarPeliculaFav: any = {};

  constructor(
    private sanitizer: DomSanitizer,
    private deleteFavMovieService: DeleteFavMovieService,
    private dialogRef: MatDialogRef<PopupInfoPeliComponent>,
    private userInformationService: UserInformationService,
    private putFavoritosService: PutFavoritosService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.movie = data;
    this.srcMovie = this.sanitizer.bypassSecurityTrustResourceUrl(data.trailer);
  }

  close() {
    this.dialogRef.close(this.movie);
  }

  enviarFavorito(movie) {
    if (this.esFavorito) {
      this.eliminarFavorito(movie);
    } else {
      this.agregarFavorito(movie);
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
    this.validarFavorito();
  }
}

