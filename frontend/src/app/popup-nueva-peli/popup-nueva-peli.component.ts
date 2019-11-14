import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-popup-nueva-peli",
  templateUrl: "./popup-nueva-peli.component.html",
  styleUrls: ["./popup-nueva-peli.component.css"]
})
export class PopupNuevaPeliComponent implements OnInit {
  
  public genres = ['Drama', 'Romance', 'Comedia', 'Anime']

  constructor(private builder: FormBuilder, private dialogRef: MatDialogRef<PopupNuevaPeliComponent>) { }

  newMovieForm: FormGroup = this.builder.group({
    title: ["", Validators.required],
    genre: ["", Validators.required],
    director: ["", Validators.required],
    duration: ["", Validators.required],
    actors: ["", Validators.required],
    file: ["", Validators.required],
    image: ["", Validators.required],
    synopsis: ["", Validators.required]
  });

  ngOnInit() { }
  onSubmit() {
    const dataobj = {
      title: this.newMovieForm.value.title,
      genre: this.newMovieForm.value.genre,
      director: this.newMovieForm.value.director,
      duration: this.newMovieForm.value.duration,
      actors: this.newMovieForm.value.actors,
      file: this.newMovieForm.value.file,
      image: this.newMovieForm.value.image,
      synopsis: this.newMovieForm.value.synopsis
    }

    console.log('-----', dataobj);
    this.close();
  }

  close() {
    this.dialogRef.close(this.newMovieForm);
  }
}
