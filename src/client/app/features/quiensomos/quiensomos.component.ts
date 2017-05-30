import { Component, OnInit } from '@angular/core';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-quiensomos',
  templateUrl: 'quiensomos.component.html',
  styleUrls: ['quiensomos.component.css'],
})
export class QuiensomosComponent implements OnInit {
  private integrantes:any[] = [
    {
      nombre: 'Leonardo Gonzalez',
      cargo: 'Director General',
      image: ''
    },
    {
      nombre: 'Andres Binder',
      cargo: 'Director General',
      image: ''
    },
    {
      nombre: 'Angelo Calvo',
      cargo: 'Director de Tecnología',
      image: ''
    }
  ];
  /**
  Constructor de la clase
  */
  constructor() {}
  /**
  Metodo de inicio
  */
  ngOnInit() {
  }
}
