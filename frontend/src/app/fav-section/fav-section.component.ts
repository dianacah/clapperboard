import { Component, OnInit } from "@angular/core";
import { UserInformationService } from "./../services/User-Information/user-information.service";
import {
  MatDialog,
  MatDialogConfig,
  MatTableDataSource
} from "@angular/material";
import { PutFavoritosService } from "./../services/putfavoritos/put-favoritos.service";
import { DeleteFavMovieService } from "../services/deleteFavMovie/delete-fav-movie.service";

@Component({
  selector: "fav-section",
  templateUrl: "./fav-section.component.html",
  styleUrls: ["./fav-section.component.css"]
})
export class FavSectionComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private userInformationService: UserInformationService,
    private putFavoritosService: PutFavoritosService,
    private deleteFavMovieService: DeleteFavMovieService
  ) {}

  public popup;
  public user;
  public peliculasFavoritas: any = [];

  /* addMoviesFav(pelicula) {
    let dialogConfig = this.openDialog();
    this.popup = this.dialog.open(PopupNewFavComponent, dialogConfig);
    this.popup.afterClosed().subscribe(response => {
      let respuesta = response.value;
    });
  } */

  /* openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "400px";
    dialogConfig.height = "250px";
    return dialogConfig;
  } */
  public idPelicula: any = {};
  deleteMovie(peliculaFavorita) {
    let email = this.user.email;
    this.idPelicula = { movieId: peliculaFavorita._id };
    console.log("requerimientos peticion", email, this.idPelicula.movieId);
    console.log(peliculaFavorita);
    this.deleteFavMovieService
      .deleteFavorito(email, this.idPelicula.movieId)
      .subscribe(response => {
        this.userInformationService.setUser(response);
        console.log("respuesta del delete", response);
        this.ngOnInit();
      });
  }
  ngOnInit() {
    this.user = this.userInformationService.getUser();
    console.log("usuario", this.user);

    this.peliculasFavoritas = this.user.favoriteMovies;
    console.log(this.user.favoriteMovies);
  }
}
