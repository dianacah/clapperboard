import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatTableDataSource } from '@angular/material';
import { PopupNewFavComponent } from '../popup-new-fav/popup-new-fav.component';


@Component({
  selector: 'fav-section',
  templateUrl: './fav-section.component.html',
  styleUrls: ['./fav-section.component.css']
})
export class FavSectionComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  public popup;
  addMoviesFav(pelicula) {
    let dialogConfig = this.openDialog();
    this.popup = this.dialog.open(PopupNewFavComponent, dialogConfig);
    this.popup.afterClosed().subscribe(response => {
      let respuesta = response.value;
    });
  }

openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "400px";
    dialogConfig.height = "250px";
    return dialogConfig;
  }

  playMoviesFav(){
    
  }

  ngOnInit() {
  }

}
