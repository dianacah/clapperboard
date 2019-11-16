import { from } from 'rxjs';
//import { GetMovieService } from './../services/getMovie/get-movie.service';
import { Component, OnInit } from "@angular/core";
import { SearchService } from './../services/searchMovie/search.service';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  infoMovies: any [];
   
  constructor(
    private searchService: SearchService
  ) { }

//Llamando al servicio
ngOnInit() {
  this.searchService.getMovie().subscribe(movies => {
    this.infoMovies = movies
    this.searchService.infoMovies = movies
  });
}

onSelectedOption(e) {
  this.getFilteredExpenseList();
}

getFilteredExpenseList() {
  if (this.searchService.searchOption.length > 0)
    this.infoMovies = this.searchService.filteredListOptions();
  else {
    this.infoMovies = this.searchService.infoMovies;
  }

  console.log(this.infoMovies)
}

  // getInfoMovie() {
  //   this.getMovieService.getMovie().subscribe((res = {}) => {
  //     this.infoMovies = res;
  //     //console.log("respuesta", this.infoMovies);
  //   });
  // }
  //copiado
  //
  //fin copiado
  // ngOnInit() {
  //   this.getInfoMovie();
  // }
}
