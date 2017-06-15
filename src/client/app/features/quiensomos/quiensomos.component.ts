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
      nombre: 'Andres Binder',
      cargo: 'Director General',
      descripcion: 'Médico Veterinario de la Universidad Mayor, con especialidad en producción y sistema de aseguramiento de calidad. Con experiencia en producción avicola y venta de productos especializados.',
      image: 'assets/img/andres.png',
      show: false,
      x:190
    },
    {
      nombre: 'Leonardo Gonzalez',
      cargo: 'Director Comercial',
      descripcion: 'Médico Veterinario emprendedor, Director Técnico Comercial y fundador  de Smart Vet. ',
      image: 'assets/img/leo.png',
      show: false,
      x:190
    },
    {
      nombre: 'Angelo Calvo',
      cargo: 'Director de Tecnología',
      descripcion: 'Soy un amante del emprendimiento y a la vez un emprendedor multidisciplinario que ha participado en múltiples proyectos startup buscando nuevas posibilidades, propuestas y modelos de negocios.',
      image: 'assets/img/angelo.png',
      show: false,
      x:270
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
