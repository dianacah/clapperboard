import { PutFavoritosService } from './../services/putfavoritos/put-favoritos.service';
import { UserInformationService } from './../services/User-Information/user-information.service';
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { userInfo } from 'os';

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
    this.srcMovie = this.sanitizer.bypassSecurityTrustResourceUrl(data.trailer);
  }

  close() {
    this.dialogRef.close(this.movie);
  }

  enviarFavorito(movie) {
    console.log(movie);
    this.userInformationService.getUser();
    this.putFavoritosService.putFavorito(userInfo, movie.movieId).subscribe((response = {}) => {
      /* revisar que quede bien importado el servicio de userInformationService */
      console.log("respuesta", response)
    });
  }
  ngOnInit() { }
}
