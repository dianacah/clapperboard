import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";


@Component({
  selector: 'app-popup-editar-peli',
  templateUrl: './popup-editar-peli.component.html',
  styleUrls: ['./popup-editar-peli.component.css']
})
export class PopupEditarPeliComponent implements OnInit {
  public genres = ['Drama', 'Romance', 'Comedia', 'Anime']

  tituloPelicula: string;
  genre : string;
  director: string;
  duration : string;
  actors : string;
  synopsis : string;

  constructor(private builder: FormBuilder, 
              private dialogRef: MatDialogRef<PopupEditarPeliComponent>,
              @Inject(MAT_DIALOG_DATA) data) { 

    this.tituloPelicula = data.title;
    this.genre = data.genre;
    this.director = data.director;
    this.duration = data.duration;
    this.actors = data.actors;
    this.synopsis = data.synopsis;
  }


  actualizarPeliForm: FormGroup = this.builder.group({
    title: ["", Validators.compose([Validators.required])],
    genre: [""],
    director: [""],
    duration: [""],
    actors: [""],
    file: [""],
    image: [""],
    synopsis: [""]
  });

  ngOnInit() {  }

  // onSubmit() {
  //   const dataAct = {
  //     title: this.actualizarPeliForm.value.title,
  //     genre: this.actualizarPeliForm.value.genre,
  //     director: this.actualizarPeliForm.value.director,
  //     duration: this.actualizarPeliForm.value.duration,
  //     actors: this.actualizarPeliForm.value.actors,
  //     file: this.actualizarPeliForm.value.file,
  //     image: this.actualizarPeliForm.value.image,
  //     synopsis: this.actualizarPeliForm.value.synopsis
  //   }

  //   console.log('-----', dataAct);
  //   this.close();
  // }

  // close() {
  //   this.dialogRef.close(this.actualizarPeliForm);
  // }

}
