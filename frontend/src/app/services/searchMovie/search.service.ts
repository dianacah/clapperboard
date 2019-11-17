import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchOption=[]
  public infoMovies: any []
  private URL = "http://localhost:3000/api/peliculas/";
  

  constructor(
    private http: HttpClient
  ) { }

  getMovie(): Observable<any[]> {
    return this.http.get<any[]>(this.URL);
  }

  filteredListOptions() {
    let movies = this.infoMovies;
        let filteredMoviesList = [];
        for (let movie of movies) {
            for (let options of this.searchOption) {
                if (options.title === movie.title) {
                  filteredMoviesList.push(movie);
                }
            }
        }
        console.log(filteredMoviesList);
        return filteredMoviesList;
  }


}
