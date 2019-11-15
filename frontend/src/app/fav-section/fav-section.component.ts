import { Component, OnInit } from "@angular/core";
import { UserInformationService } from "./../services/User-Information/user-information.service";
import {
  MatDialog,
  MatDialogConfig,
  MatTableDataSource
} from "@angular/material";
import { PutFavoritosService } from "./../services/putfavoritos/put-favoritos.service";
import { DeleteFavMovieService } from "../services/deleteFavMovie/delete-fav-movie.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "fav-section",
  templateUrl: "./fav-section.component.html",
  styleUrls: ["./fav-section.component.css"]
})
export class FavSectionComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private userInformationService: UserInformationService,
    private putFavoritosService: PutFavoritosService,
    private deleteFavMovieService: DeleteFavMovieService
  ) {}

  public popup;
  public user;
  public peliculasFavoritas: any = [];
  public idPelicula: any = {};
  public peliculaFav;
  public trailer;
  deleteMovie(peliculaFavorita) {
    let email = this.user.email;
    this.idPelicula = { movieId: peliculaFavorita._id };
    this.deleteFavMovieService
      .deleteFavorito(email, this.idPelicula.movieId)
      .subscribe(response => {
        this.userInformationService.setUser(response);
        this.ngOnInit();
      });
  }
  mostrarInfoPeliculaFav(peliculaFavorita) {
    console.log(peliculaFavorita);
    this.peliculaFav = peliculaFavorita;
    this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.peliculaFav.trailer
    );
  }
  ngOnInit() {
    this.user = this.userInformationService.getUser();
    this.peliculasFavoritas = this.user.favoriteMovies;
  }
}
