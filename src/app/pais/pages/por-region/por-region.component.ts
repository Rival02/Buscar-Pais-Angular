import { Component,  } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button {
      margin-right: 15px;
    }`
  ]
})
export class PorRegionComponent  {

    regiones: string[]= [  'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    regionActiva: string = '';
    paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCss ( region : string): string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  activarRegion ( region: string){

    if ( region === this.regionActiva) {return};

    this.regionActiva = region;
    this.paises = [];

    this.paisService.bucarRegion(region)
    .subscribe (paises => this.paises = paises);

    //TODO: hacer el llamado al servicio
  }
 
}
