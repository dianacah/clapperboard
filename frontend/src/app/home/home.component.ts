import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public team = [
    {
      name: "Geraldine Cabrera",
      image: "../../assets/home/images/Geraldine.jpg",
      role: "Product Owner"
    },
    {
      name: "Julieth Osuna",
      image: "../../assets/home/images/Julieth.jpg",
      role: "SCRUM Master"
    },
    {
      name: "Deissy Mantilla",
      image: "../../assets/home/images/Deissy.jpg",
      role: "Líder Técnica"
    },
    {
      name: "Erika Peña",
      image: "../../assets/home/images/Erika.jpg",
      role: "Líder de Frontend"
    },
    {
      name: "Diana Hurtado",
      image: "../../assets/home/images/Diana.jpg",
      role: "Líder de Backend"
    },
    {
      name: "Mónica Rodríguez",
      image: "../../assets/home/images/Mónica.jpg",
      role: "Líder de Base de Datos"
    },
    {
      name: "Angie Ortiz",
      image: "../../assets/home/images/Angie.jpg",
      role: "Líder de Pruebas"
    },
    {
      name: "Milena Vargas",
      image: "../../assets/home/images/Milena.jpg",
      role: "SCRUM Team"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
