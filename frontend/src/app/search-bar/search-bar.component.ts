import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { SearchService } from './../services/searchMovie/search.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  allMovies: any [];
  autoCompleteList: any[];
  public infoMovies: any [];  
  
  @ViewChild('autocompleteInput', {static: false}) autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchService.getMovie().subscribe(movies =>{
      this.allMovies = movies
    });

    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    })

  }
  private autoCompleteExpenseList(input) {
    let categoryList = this.filterCategoryList(input)
    this.autoCompleteList = categoryList;
  }

  filterCategoryList(val) {
    var categoryList = []
    if (typeof val != "string") {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    return val ? this.allMovies.filter(s => s.title.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.allMovies;
  }
  
  displayFn(movie: any) {
    let k = movie ? movie.title : movie;
    return k;
  }

  
  filterMovieList(event) {
    var movies= event.source.value;
        if(!movies) {
          this.searchService.searchOption=[]
        }
        else {
          console.log("not")

            this.searchService.searchOption.push(movies);
            this.onSelectedOption.emit(this.searchService.searchOption)
        }
        
        this.focusOnPlaceInput();

  }


  removeOption(option) {
          
    let index = this.searchService.searchOption.indexOf(option);
    if (index >= 0)
        this.searchService.searchOption.splice(index, 1);
        this.focusOnPlaceInput();

        this.onSelectedOption.emit(this.searchService.searchOption)
  } 

  focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
  }

}