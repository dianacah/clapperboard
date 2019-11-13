import { Component, OnInit } from "@angular/core";
import { UserInformationService } from "./../services/User-Information/user-information.service";
import {
  MatDialog,
  MatDialogConfig,
  MatTableDataSource
} from "@angular/material";
import { PutFavoritosService } from "./../services/putfavoritos/put-favoritos.service";

@Component({
  selector: "fav-section",
  templateUrl: "./fav-section.component.html",
  styleUrls: ["./fav-section.component.css"]
})
export class FavSectionComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private userInformationService: UserInformationService,
    private putFavoritosService: PutFavoritosService
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

  ngOnInit() {
    this.user = this.userInformationService.getUser();
    console.log("usuario", this.user);

    this.peliculasFavoritas = this.user.favoriteMovies;
    console.log(this.user.favoriteMovies);
  }
}
