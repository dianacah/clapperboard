import { Component, OnInit } from "@angular/core";
import { PeliculaAReproducirService } from "./../services/PeliculaAReproducir/pelicula-areproducir.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  public title;
  public genre;
  public duration;
  public synopsis;
  public file;
  constructor(
    private sanitizer: DomSanitizer,
    private peliculaAReproducirService: PeliculaAReproducirService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      let movie = this.peliculaAReproducirService.getMovie();
      this.title = movie.title;
      this.genre = movie.genre;
      this.duration = movie.duration;
      this.synopsis = movie.synopsis;
      this.file = this.sanitizer.bypassSecurityTrustResourceUrl(movie.file);
    }, 500);
  }
}
