import { UserInformationService } from "./../services/User-Information/user-information.service";
import { GetMovieService } from "./../services/getMovie/get-movie.service";
import { Component, OnInit } from "@angular/core";
import { PopupNuevaPeliComponent } from "./../popup-nueva-peli/popup-nueva-peli.component";
import {
  MatDialog,
  MatDialogConfig,
  MatTableDataSource
} from "@angular/material";
import { PopupEditarPeliComponent } from "../popup-editar-peli/popup-editar-peli.component";
import { PostMovieService } from "../services/postMovie/post-movie.service";
import { DataSource } from "@angular/cdk/table";
import { UpdateMoviesService } from "./../services/update-movies.service";
import { GetUsersService } from "../services/getUsers/get-users.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  public name;
  public user;
  public id;
  public role;

  constructor(
    private updateMoviesService: UpdateMoviesService,
    private dialog: MatDialog,
    private getMovieService: GetMovieService,
    private userInformationService: UserInformationService,
    private postMovieService: PostMovieService,
    private getUsersService: GetUsersService
  ) {}

  public infoUsers: any = [];
  usersTableColumns: string[] = ["icono", "nombre", "correo"];

  public infoMovies: any = [];
  moviesTableColumns: string[] = ["imagen", "pelicula", "genero", "accion"];
  public popup;
  // public dataSource = [this.infoMovies];

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.height = "400px";
    return dialogConfig;
  }

  //click
  agregarPelicula(movie) {
    let dialogConfig = this.openDialog();
    this.popup = this.dialog.open(PopupNuevaPeliComponent, dialogConfig);
    this.popup.afterClosed().subscribe(res => {
      let respuesta = res.value;
      let genre = respuesta.genre;
      let pathImagen = "../../../assets/home/images/";
      let nombreImagen = respuesta.image.substr(12, respuesta.image.length);
      respuesta.image = pathImagen + genre + "/" + nombreImagen;
      console.log("respuesta", respuesta);
      this.addInfoMovie(respuesta);
    });
  }

  editarPelicula(dataEdit) {
    this.id = dataEdit._id;
    let dialogConfig = this.openDialog();
    dialogConfig.data = {
      id: dataEdit._id,
      actors: dataEdit.actors,
      director: dataEdit.director,
      duration: dataEdit.duration,
      file: dataEdit.file,
      genre: dataEdit.genre,
      image: dataEdit.image,
      synopsis: dataEdit.synopsis,
      title: dataEdit.title,
      trailer: dataEdit.trailer,
      disableClose: false,
      autoFocus: true,
      width: "400px",
      height: "450px"
    };
    this.popup = this.dialog.open(PopupEditarPeliComponent, dialogConfig);
  }
  updateMovie(dataFormulario) {
    this.updateMoviesService
      .updateMovie(this.id, dataFormulario)
      .subscribe(response => {
        console.log(response);
        this.ngOnInit();
      });
  }
  // this.postMovieService.updateMoviedb(movie, datos).subscribe((res = {}) => {
  //   this.infoMovies = res;
  //   console.log("actualizando", this.infoMovies)
  // })

  borrarPelicula(movie) {
    console.log(movie);
    this.postMovieService.deleteMovie(movie.title).subscribe(response => {
      console.log(response);
    });
    this.ngOnInit();
  }
  //servicios

  getInfoMovie() {
    this.getMovieService.getMovie().subscribe((res = {}) => {
      this.infoMovies = res;
      // console.log("funciona get", this.infoMovies);
    });
  }
  addInfoMovie(movie) {
    this.postMovieService.addMovie(movie).subscribe(res => {
      this.ngOnInit();
    });
  }
  deleteInfoMovie(idMovie) {
    this.postMovieService.deleteMovie(idMovie).subscribe(res => {
      this.ngOnInit();
    });
  }

  getUser() {
    setTimeout(() => {
      this.user = this.userInformationService.getUser();
      this.name = this.user.name.split(" ", 1);
      this.role = this.user.role;
      this.ngOnInit();
    }, 200);
  }

  getAllUsers() {
    this.getUsersService.getUsers().subscribe((res = []) => {
      this.infoUsers = res;

      this.infoUsers = this.infoUsers.filter(user => {
        return user.name != this.name;
      });
      console.log(this.name, this.infoUsers);
    });
  }

  ngOnInit() {
    this.getInfoMovie();
    this.getUser();
    this.getAllUsers();
  }
}
