import { UserInformationService } from './../services/User-Information/user-information.service';
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

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
    /* this.userInformationService.putUser().subscribe((response = {}) => {
     this.enviarPeliculaFav = response;
     console.log("respuesta", this.enviarPeliculaFav)
   });  */
  }
  ngOnInit() { }
}
