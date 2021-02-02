import { Component, OnInit } from '@angular/core';
import { ClinicasService } from '../../servicios/clinicas.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-clinicas',
  templateUrl: './clinicas.component.html',
})
export class ClinicasComponent implements OnInit {

  clinicas:any[]=[];
  
  //se ejecuta muccho antes que la pagina se carge
  constructor( private _clinicasService:ClinicasService,
               private router: Router ) {

  }
  
  //cuando la pagina ya esta rendedizada o cargada
  ngOnInit(): void {
    this.clinicas = this._clinicasService.getClinicas();

  }
  verClinica( idx:number) {
    this.router.navigate( ['/clinica', idx] )


  }

}
