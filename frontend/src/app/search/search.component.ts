import { from } from 'rxjs';
import { GetMovieService } from './../services/getMovie/get-movie.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  public infoMovies: any = [];


  constructor(
    private getMovieService: GetMovieService
  ) { }


  getInfoMovie() {
    this.getMovieService.getMovie().subscribe((res = {}) => {
      this.infoMovies = res;
      //console.log("respuesta", this.infoMovies);
    });
  }
  ngOnInit() {
    this.getInfoMovie();
  }
}
