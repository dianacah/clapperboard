import { UpdateMoviesService } from './../services/update-movies.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";


@Component({
  selector: 'app-popup-editar-peli',
  templateUrl: './popup-editar-peli.component.html',
  styleUrls: ['./popup-editar-peli.component.css']
})
export class PopupEditarPeliComponent implements OnInit {

  tituloPelicula: string;
  genre: string;
  director: string;
  duration: string;
  actors: string;
  synopsis: string;
  public pelicula;

  constructor(private builder: FormBuilder,
    private dialogRef: MatDialogRef<PopupEditarPeliComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private updateMoviesService: UpdateMoviesService) {
    this.pelicula = data;
    this.tituloPelicula = data.title;
    this.genre = data.genre;
    this.director = data.director;
    this.duration = data.duration;
    this.actors = data.actors;
    this.synopsis = data.synopsis;
  }

  actualizarPeliForm: FormGroup = this.builder.group({
    title: [this.tituloPelicula, Validators.compose([Validators.required])],
    genre: [this.genre],
    director: [this.dialogRef],
    duration: [this.duration],
    actors: [this.actors],
    //file: [""],
    // image: [""],
    synopsis: [this.synopsis]
  });

  ngOnInit() {
    console.log("peli", this.pelicula)
  }

  onSubmit() {
    const dataAct = {
      title: this.actualizarPeliForm.value.title,
      genre: this.actualizarPeliForm.value.genre,
      director: this.actualizarPeliForm.value.director,
      duration: this.actualizarPeliForm.value.duration,
      actors: this.actualizarPeliForm.value.actors,
      // file: this.actualizarPeliForm.value.file,
      // image: this.actualizarPeliForm.value.image,
      synopsis: this.actualizarPeliForm.value.synopsis
    }

    console.log('-----', dataAct);
    this.close();
  }

  close() {
    this.dialogRef.close(this.actualizarPeliForm);
  }



}
