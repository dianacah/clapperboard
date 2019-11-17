import { Component, OnInit } from "@angular/core";
import { SearchService } from "./../services/searchMovie/search.service";


@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  public infoMovies: any = [];
   

  constructor(
    private searchService: SearchService,
    
  ) { }

//Llamando al servicio
ngOnInit() {
  this.searchService.getMovie().subscribe((movies => {
    this.infoMovies = movies
    this.searchService.infoMovies = movies
  }));
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
}





}
