import { Component, OnInit } from "@angular/core";
import { PeliculaAReproducirService } from "./../services/PeliculaAReproducir/pelicula-areproducir.service";
import { DomSanitizer } from "@angular/platform-browser";
import { GetMovieService } from "../services/getMovie/get-movie.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  public interestingMovies: any = [];
  public infoMovies: any = [];

  public title;
  public genre;
  public duration;
  public synopsis;
  public file;

  constructor(
    private getMovieService: GetMovieService,
    private sanitizer: DomSanitizer,
    private peliculaAReproducirService: PeliculaAReproducirService
  ) {}

  getInfoMovie() {
    this.getMovieService.getMovie().subscribe((res = {}) => {
      this.infoMovies = res;

      this.interestingMovies = this.infoMovies.filter(movie => {
        return movie.genre == "Drama";
      });
    });
  }

  ngOnInit() {
    setTimeout(() => {
      let movie = this.peliculaAReproducirService.getMovie();
      this.title = movie.title;
      this.genre = movie.genre;
      this.duration = movie.duration;
      this.synopsis = movie.synopsis;
      this.file = this.sanitizer.bypassSecurityTrustResourceUrl(movie.file);
    }, 500);

    this.getInfoMovie();
  }
}
