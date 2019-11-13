import { PutFavoritosService } from "./../services/putfavoritos/put-favoritos.service";
import { UserInformationService } from "./../services/User-Information/user-information.service";
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
/* import { userInfo } from 'os'; */

@Component({
  selector: "app-popup-info-peli",
  templateUrl: "./popup-info-peli.component.html",
  styleUrls: ["./popup-info-peli.component.css"]
})
export class PopupInfoPeliComponent implements OnInit {
  public movie;
  public srcMovie;

  enviarPeliculaFav: any = {};

  constructor(
    private sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<PopupInfoPeliComponent>,
    private userInformationService: UserInformationService,
    private putFavoritosService: PutFavoritosService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.movie = data;
    console.log(data);
    this.srcMovie = this.sanitizer.bypassSecurityTrustResourceUrl(data.trailer);
  }

  close() {
    this.dialogRef.close(this.movie);
  }

  enviarFavorito(movie) {
    console.log(movie);
    let useri = this.userInformationService.getUser();
    console.log(movie.movieId);
    let peliFav = { movieId: movie.movieId };
    console.log(peliFav);
    this.putFavoritosService
      .putFavorito(useri.email, peliFav)
      .subscribe((response = {}) => {
        /* revisar que quede bien importado el servicio de userInformationService */
        console.log("respuesta", response);
      });
  }
  ngOnInit() {}
}
