import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-releases",
  templateUrl: "./releases.component.html",
  styleUrls: ["./releases.component.css"]
})
export class ReleasesComponent implements OnInit {
  public images: Array<string>;

  constructor() {
    this.images = [944, 1011, 984].map(
      n => `https://picsum.photos/id/${n}/900/500`
    );
  }

  public movies = [
    {
      title: " A los trece",
      director: "Catherine Hardwicke",
      duration: "2:00",
      genre: "Drama",
      actors: "Holly Hunter, Evan Rachel Wood, Nikki Reed, Jeremy Sisto",
      file: "https://www.youtube.com/embed/yg1U88BiZZ0",
      image: "../../assets/home/images/Drama/ALosTrece.jpg",
      synopsis:
        "Honor student Tracy Freeland (Evan Rachel Wood) has a troubling home life, but she is close to her mother, Melanie (Holly Hunter). While trying to conceal her inner turmoil by excelling academically, she befriends the calculating Evie (Nikki Reed), her school's queen bee. Evie talks Tracy into experimenting with drugs, exploring her sexuality and pickpocketing strangers to finance shopping sprees -- but before long, Melanie realizes she must step in and stop her daughter's destructive lifestyle.",
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
    },
    {
      title: " Amelie",
      director: "Jean-Pierre Jeunet",
      duration: "2:00",
      genre: "Drama",
      actors: "Audrey Tautou, Mathieu Kassovitz",
      file: "./../",
      image: "../../assets/home/images/Drama/Amelie.jpg",
      synopsis:
        "'Amélie' is a fanciful comedy about a young woman who discretely orchestrates the lives of the people around her, creating a world exclusively of her own making. Shot in over 80 Parisian locations, acclaimed director Jean-Pierre Jeunet (Delicatessen; The City of Lost Children) invokes his incomparable visionary style to capture the exquisite charm and mystery of modern-day Paris through the eyes of a beautiful ingenue",
      trailer: "https://www.youtube.com/embed/HUECWi5pX7o"
    },
    {
      title: " El cisne negro",
      director: "Christian",
      duration: "2:00",
      genre: "Drama",
      actors: "lllll, kkkkkk",
      file: "./../",
      image: "../../assets/home/images/Drama/CisneNegro.jpg",
      synopsis: "Lorem ipsum lorem ipsum",
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
    },
    {
      title: " La decicion de Anne",
      director: "Christian",
      duration: "2:00",
      genre: "Drama",
      actors: "lllll, kkkkkk",
      file: "./../",
      image: "../../assets/home/images/Drama/LaDecisionDeAnne.jpg",
      synopsis: "Lorem ipsum lorem ipsum",
      trailer: "https://www.youtube.com/embed/TcQbMBfgZDs"
    }
  ];

  ngOnInit() {}
}
