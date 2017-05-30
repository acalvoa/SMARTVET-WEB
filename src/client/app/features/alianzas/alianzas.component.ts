import { Component, OnInit } from '@angular/core';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-alianzas',
  templateUrl: 'alianzas.component.html',
  styleUrls: ['alianzas.component.css'],
})
export class AlianzasComponent implements OnInit {
  private alianzas:any[] = [
    {
      nombre: 'Lavacan',
      image: ''
    },
    {
      nombre: 'Tecnopet',
      image: ''
    },
    {
      nombre: 'Laboratorios andes',      
      image: ''
    },
    {
      nombre: 'Lavacan',
      image: ''
    },
    {
      nombre: 'Tecnopet',
      image: ''
    },
    {
      nombre: 'Laboratorios andes',      
      image: ''
    },
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
