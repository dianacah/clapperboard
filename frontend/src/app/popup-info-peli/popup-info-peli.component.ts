import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-popup-info-peli",
  templateUrl: "./popup-info-peli.component.html",
  styleUrls: ["./popup-info-peli.component.css"]
})
export class PopupInfoPeliComponent implements OnInit {
  public movie: string;

  constructor(
    private dialogRef: MatDialogRef<PopupInfoPeliComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.movie = data;
  }

  ngOnInit() {
    console.log(this.movie);
  }
}
