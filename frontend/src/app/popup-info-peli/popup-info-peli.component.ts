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

  constructor(
    private sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<PopupInfoPeliComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.movie = data;
    this.srcMovie = this.sanitizer.bypassSecurityTrustResourceUrl(data.trailer);
    console.log(this.srcMovie);
  }

  close() {
    this.dialogRef.close(this.movie);
  }

  ngOnInit() {
    console.log(this.movie);
  }
}
