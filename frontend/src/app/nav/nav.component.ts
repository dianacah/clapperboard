import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  ids: Array<String> = ['Vive la experiencia', 'Quiénes somos']

  constructor() { }

  ngOnInit() {
  }

}
