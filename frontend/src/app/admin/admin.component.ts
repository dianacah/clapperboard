import { GetMovieService } from './../services/getMovie/get-movie.service';
import { Component, OnInit } from "@angular/core";
import { PopupNuevaPeliComponent } from "./../popup-nueva-peli/popup-nueva-peli.component";
import {
  MatDialog,
  MatDialogConfig,
  MatTableDataSource
} from "@angular/material";
import { PopupEditarPeliComponent } from '../popup-editar-peli/popup-editar-peli.component';
import { PostMovieService } from '../services/postMovie/post-movie.service';
import { DataSource } from '@angular/cdk/table';
import { UpdateMoviesService } from "./../services/update-movies.service"

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {

  constructor(
    private updateMoviesService: UpdateMoviesService,
    private dialog: MatDialog,
    private getMovieService: GetMovieService,
    private postMovieService: PostMovieService) { }

  public infoMovies: any = [];
  tableColumns: string[] = ["imagen", "pelicula", "genero", "accion"];
  public popup;
  public id;
  public dataSource = [this.infoMovies];

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.height = "450px";
    return dialogConfig;
  }

  //click
  agregarPelicula(movie) {
    let dialogConfig = this.openDialog();
    this.popup = this.dialog.open(PopupNuevaPeliComponent, dialogConfig);
    this.popup.afterClosed().subscribe(res => {
      let respuesta = res.value;
      let pathImagen = "../../../assets/home/images/";
      let nombreImagen = respuesta.image.substr(12, respuesta.image.length);
      respuesta.image = pathImagen + nombreImagen;
      console.log("respuesta", respuesta);
      this.addInfoMovie(respuesta);
    });

  }
  editarPelicula(dataEdit) {
    this.id = dataEdit._id
    let dialogConfig = this.openDialog();
    dialogConfig.data = {
      id: dataEdit._id,
      actors: dataEdit.actors,
      director: dataEdit.director,
      duration: dataEdit.duration,
      file: dataEdit.file,
      genre: dataEdit.genre,
      // image: dataEdit.image,
      synopsis: dataEdit.synopsis,
      title: dataEdit.title,
      // trailer: dataEdit.trailer,
      disableClose: false,
      autoFocus: true,
      width: "400px",
      height: "450px",
    };
    this.popup = this.dialog.open(PopupEditarPeliComponent, dialogConfig);
    this.popup.afterClosed().subscribe(response => {
      console.log("respuesta del popup", response);
      this.updateMovie(response.value)
    })
  }
  updateMovie(dataFormulario) {
    this.updateMoviesService.updateMovie(this.id, dataFormulario).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    })
  }
  // this.postMovieService.updateMoviedb(movie, datos).subscribe((res = {}) => {
  //   this.infoMovies = res;
  //   console.log("actualizando", this.infoMovies)
  // })

  borrarPelicula(movie) {
    console.log(movie);
    this.postMovieService
      .deleteMovie(movie.title)
      .subscribe(response => {
        console.log(response);
      });
    this.ngOnInit();
  }
  //servicios

  getInfoMovie() {
    this.getMovieService.getMovie().subscribe((res = {}) => {
      this.infoMovies = res;
      console.log("funciona get", this.infoMovies)
    })
  }
  addInfoMovie(movie) {
    this.postMovieService.addMovie(movie).subscribe(res => {
      this.ngOnInit();
    });
  }
  deleteInfoMovie(idMovie) {
    this.postMovieService.deleteMovie(idMovie).subscribe(res => {
      this.ngOnInit()
    })
  }

  ngOnInit() {
    this.getInfoMovie()
  }
}
