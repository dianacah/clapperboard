import { UpdateMoviesService } from "./../services/update-movies.service";
import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-popup-editar-peli",
  templateUrl: "./popup-editar-peli.component.html",
  styleUrls: ["./popup-editar-peli.component.css"]
})
export class PopupEditarPeliComponent implements OnInit {
  public genres = ["Drama", "Romance", "Comedia", "Anime"];

  tituloPelicula: string;
  genre: string;
  director: string;
  duration: string;
  actors: string;
  synopsis: string;
  releaseValue: string;
  public pelicula;
  actualizarPeliForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private dialogRef: MatDialogRef<PopupEditarPeliComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private updateMoviesService: UpdateMoviesService
  ) {}

  ngOnInit() {
    console.log(this.data);
    this.pelicula = this.data;
    this.tituloPelicula = this.data.title;
    this.genre = this.data.genre;
    this.director = this.data.director;
    this.duration = this.data.duration;
    this.actors = this.data.actors;
    this.synopsis = this.data.synopsis;
    this.releaseValue = this.data.release;

    this.actualizarPeliForm = this.builder.group({
      title: [this.tituloPelicula, Validators.compose([Validators.required])],
      genre: [this.genre],
      director: [this.director],
      duration: [this.duration],
      actors: [this.actors],
      synopsis: [this.synopsis],
      release: [this.releaseValue]
    });
    console.log(this.releaseValue);
  }

  onSubmit() {
    const dataAct = {
      title: this.actualizarPeliForm.value.title,
      genre: this.actualizarPeliForm.value.genre,
      director: this.actualizarPeliForm.value.director,
      duration: this.actualizarPeliForm.value.duration,
      actors: this.actualizarPeliForm.value.actors,
      synopsis: this.actualizarPeliForm.value.synopsis,
      release: this.actualizarPeliForm.value.release
    };

    this.close();
  }

  close() {
    this.dialogRef.close(this.actualizarPeliForm);
  }
}
