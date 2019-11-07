import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public dataSource = [{ nombre: 'nombre' }, { nombre: 'pelicula' }, { nombre: 'duracion' }]
  tableColumns: string[] = ['pelicula']
  constructor() { }

  ngOnInit() {
  }

}
