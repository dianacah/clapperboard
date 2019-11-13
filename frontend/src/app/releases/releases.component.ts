import { GetMovieService } from './../services/getMovie/get-movie.service';
import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-releases",
  templateUrl: "./releases.component.html",
  styleUrls: ["./releases.component.css"],
  providers: [NgbCarouselConfig]
})
export class ReleasesComponent implements OnInit {

  public infoMovies: any = {}
  public releases: any = {}

  constructor(
    private getMovieService: GetMovieService,
    config: NgbCarouselConfig) {
    config.showNavigationIndicators = false;
  }

  getInfoMovie() {
    this.getMovieService.getMovie().subscribe((res = {}) => {
      this.infoMovies = res;
      console.log("respuesta", this.infoMovies)

      this.releases = this.infoMovies.filter( movie => {
        return movie.release == true
      })

    })
  }

  ngOnInit() { 
    this.getInfoMovie()
  }
}
