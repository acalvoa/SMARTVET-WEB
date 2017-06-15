import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest/rest.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-contacto',
  templateUrl: 'contacto.component.html',
  styleUrls: ['contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  /**
  Constructor de la clase
  */
  constructor(private rest:RestService) {}
  /**
  Metodo de inicio
  */
  ngOnInit() {
  }

  /*form de contacto*/
  private contact(event:any, form:any){
    event.preventDefault();
  }
}
