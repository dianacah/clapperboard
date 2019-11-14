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


@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private getMovieService: GetMovieService,
    private postMovieService: PostMovieService) { }

  public infoMovies: any = [];
  tableColumns: string[] = ["imagen", "pelicula", "genero", "accion"];
  public popup;

  public dataSource = [ this.infoMovies
    // {
    //   imagen: "../../assets/home/images/Drama/CisneNegro.jpg",
    //   nombre: "Cisne Negro",
    //   genero: "Drama"
    // },
    // {
    //   imagen: "../../assets/home/images/Romance/500DiasConElla.jpg",
    //   nombre: "500 días con ella",
    //   genero: "Romantica"
    // },
    // {
    //   imagen: "../../assets/home/images/Comedia/AlgoPasaConMary.jpg",
    //   nombre: "Algo pasa con Mary",
    //   genero: "Comedia"
    // },
    // {
    //   imagen: "../../assets/home/images/Drama/Amelie.jpg",
    //   nombre: "Amelie",
    //   genero: "Drama"
    // },
    // {
    //   imagen: "../../assets/home/images/Romance/Titanic.jpg",
    //   nombre: "Titanic",
    //   genero: "Romantica"
    // },
    // {
    //   imagen: "../../assets/home/images/Comedia/ChicasMalas.jpg",
    //   nombre: "Chicas malas",
    //   genero: "Comedia"
    // },
    // {
    //   imagen: "../../assets/home/images/Drama/ALosTrece.jpg",
    //   nombre: "A los 13",
    //   genero: "Drama"
    // },
    // {
    //   imagen: "../../assets/home/images/Comedia/NoEsRomantico.jpg",
    //   nombre: "No es romantico",
    //   genero: "Comedia"
    // },
    // {
    //   imagen: "../../assets/home/images/Comedia/ScaryMovie.jpg",
    //   nombre: "Scary movie",
    //   genero: "Comedia"
    // }
  ];
  

  

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
  editarPelicula(event) {
    console.log(event);
    let dialogConfig = this.openDialog();
    this.popup = this.dialog.open(PopupEditarPeliComponent, dialogConfig);
  }
  borrarPelicula(movie) {
    console.log(movie);
    this.postMovieService
      .deleteMovie(movie._id)
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
  deleteInfoMovie(idMovie){
    this.postMovieService.deleteMovie(idMovie).subscribe(res =>{
      this.ngOnInit()
    })
  }

  ngOnInit() {
    this.getInfoMovie()
  }
}
