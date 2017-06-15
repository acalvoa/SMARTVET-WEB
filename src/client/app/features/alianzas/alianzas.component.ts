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
      nombre: 'Kaleido',
      image: 'assets/alianzas/kaleido.png',
      description:'Nos dedicamos al diseño y confección de uniformes/trajes para profesionales de diversas áreas: kinesiologos veterinarinarios, médicos, dentistas, tens, auxiliares de aseo, etc. Además también proveemos de ropa corporativa como polerones polar, poleras, jockeys, entre otros. Se realizan tanto uniformes clásicos como diseños personalizados.',
      x: 150,
      show:false
    },
    {
      nombre: 'Punto Medic',
      image: 'assets/alianzas/puntomedic.png',
      description: 'Somos una empresa dedicada a satisfacer las necesidades de nuestros Médicos Veterinarios, facilitando la compra de artículos e instrumentales quirúrgicos para que desarrollen de mejor manera sus labores día a día. Apoyando el desarrollo de nuestros colegas y de cada uno de nuestros clientes',
      x: 100,
      show:false
    },
    {
      nombre: 'Vet-Test',     
      image: 'assets/alianzas/vet-test.png',
      description: 'Empresa dedicada a brindar exámenes de laboratorios con los más altos estándares de calidad, con personal altamente calificado y comprometidos a entregar resultados fidedignos y oportunos para sus pacientes además de ofrecer atención totalmente personalizada. Dejamos invitados a trabajar con el mejor laboratorio de Chile',
      x: 120,
      show:false
    },
    {
      nombre: 'Cekivet',
      image: 'assets/alianzas/cekivet.png',
      description: 'Entrega la especialidad de Fisiatría y Kinesiología para animales menores (perros y gatos).',
      x: 150,
      show:false
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
