import { Component, OnInit } from "@angular/core";
import { SearchService } from "./../services/searchMovie/search.service";
//popup
import {
  MatDialog,
  MatDialogConfig,
  MatTableDataSource
} from "@angular/material";
import { PopupInfoPeliComponent } from "./../popup-info-peli/popup-info-peli.component";
import { PeliculaAReproducirService } from "./../services/PeliculaAReproducir/pelicula-areproducir.service";


@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  public infoMovies: any = [];
  public popup; 

  constructor(
    private searchService: SearchService,
    private dialog: MatDialog,
    private peliculaAReproducirService: PeliculaAReproducirService,
    
    
  ) { }

//Llamando al servicio
ngOnInit() {
  this.searchService.getMovie().subscribe((movies => {
    this.infoMovies = movies
    this.searchService.infoMovies = movies
  }));
}

onSelectedOption(e) {
  this.getFilteredExpenseList();
}

getFilteredExpenseList() {
  if (this.searchService.searchOption.length > 0)
    this.infoMovies = this.searchService.filteredListOptions();
  else {
    this.infoMovies = this.searchService.infoMovies;
  }
}

//Popup------

openDialog() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = false;
  dialogConfig.width = "800px";
  dialogConfig.height = "680px";
  return dialogConfig;
}

mostrarPelicula(pelicula) {
  console.log("pelicula", pelicula);
  let dialogConfig = this.openDialog();
  dialogConfig.data = {
    title: pelicula.title,
    director: pelicula.director,
    duration: pelicula.duration,
    genre: pelicula.genre,
    actors: pelicula.actors,
    file: pelicula.file,
    image: pelicula.image,
    synopsis: pelicula.synopsis,
    trailer: pelicula.trailer,
    movieId: pelicula._id
  };
  this.popup = this.dialog.open(PopupInfoPeliComponent, dialogConfig);
  this.popup.afterClosed().subscribe(response => {
    let respuesta = response;
    this.peliculaAReproducirService.setMovie(respuesta);
  });
}

}
