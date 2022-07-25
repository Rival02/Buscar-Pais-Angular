import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Idd, Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor( 
    private activatedRoute: ActivatedRoute , 
    private paisService: PaisService
    
    ) { }

  ngOnInit(): void {
    

    this.activatedRoute.params
    .pipe( 
      switchMap( ( param ) => this.paisService.getPaisPorCodigo( param['id'] ) ),
      tap(console.log)
      )
    
    .subscribe(pais => this.pais = pais.shift());

    // this.activatedRoute.params
    // .subscribe( ({ id })=> {
    //   console.log(id);
      
    //   this.paisService.getPaisPorCodigo(id)
    //   .subscribe( pais => {
    //     console.log(pais);
        
    //   } );

    // });
  }

}
