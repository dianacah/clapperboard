import { GetMovieService } from './../services/getMovie/get-movie.service';
import { Component, OnInit } from "@angular/core";
import { PopupNuevaPeliComponent } from "./../popup-nueva-peli/popup-nueva-peli.component";
import {
  MatDialog,
  MatDialogConfig,
  MatTableDataSource
} from "@angular/material";
import { PopupEditarPeliComponent } from '../popup-editar-peli/popup-editar-peli.component';


@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {

  public infoMovies: any = [];

  public dataSource = [
    {
      imagen: "../../assets/home/images/Drama/CisneNegro.jpg",
      nombre: "Cisne Negro",
      genero: "Drama"
    },
    {
      imagen: "../../assets/home/images/Romance/500DiasConElla.jpg",
      nombre: "500 días con ella",
      genero: "Romantica"
    },
    {
      imagen: "../../assets/home/images/Comedia/AlgoPasaConMary.jpg",
      nombre: "Algo pasa con Mary",
      genero: "Comedia"
    },
    {
      imagen: "../../assets/home/images/Drama/Amelie.jpg",
      nombre: "Amelie",
      genero: "Drama"
    },
    {
      imagen: "../../assets/home/images/Romance/Titanic.jpg",
      nombre: "Titanic",
      genero: "Romantica"
    },
    {
      imagen: "../../assets/home/images/Comedia/ChicasMalas.jpg",
      nombre: "Chicas malas",
      genero: "Comedia"
    },
    {
      imagen: "../../assets/home/images/Drama/ALosTrece.jpg",
      nombre: "A los 13",
      genero: "Drama"
    },
    {
      imagen: "../../assets/home/images/Comedia/NoEsRomantico.jpg",
      nombre: "No es romantico",
      genero: "Comedia"
    },
    {
      imagen: "../../assets/home/images/Comedia/ScaryMovie.jpg",
      nombre: "Scary movie",
      genero: "Comedia"
    }
  ];
  tableColumns: string[] = ["imagen", "pelicula", "genero", "accion"];
  public popup;

  constructor(
    private dialog: MatDialog,
    private getMovieService: GetMovieService) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.height = "450px";
    return dialogConfig;
  }

  agregarPelicula() {
    let dialogConfig = this.openDialog();
    this.popup = this.dialog.open(PopupNuevaPeliComponent, dialogConfig);
  }
  editarPelicula(event) {
    console.log(event);
    let dialogConfig = this.openDialog();
    this.popup = this.dialog.open(PopupEditarPeliComponent, dialogConfig);
  }

  getInfoMovie() {
    this.getMovieService.getMovie().subscribe((res = {}) => {
      this.infoMovies = res;
      console.log("funciona", this.infoMovies)
    })
  }


  ngOnInit() {
    this.getInfoMovie()
  }
}
