import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ClinicasService } from '../../servicios/clinicas.service';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styles: [
  ]
})
export class ClinicaComponent  {

  clinica: any = {};

  constructor( private ActivatedRoute: ActivatedRoute,
               private _ClinicasService: ClinicasService
               
               ) { 
    this.ActivatedRoute.params.subscribe( params => {
      this.clinica = this._ClinicasService.getclinica(params['id'])
      console.log(this.clinica  )
    } )
  }


}
