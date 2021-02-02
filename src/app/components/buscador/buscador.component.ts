import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClinicasService } from '../../servicios/clinicas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {
  clinicas:any[] =[];
  term:string = '';
  @Input() clinica: any ={}; //la propiedad heroe puede venir de afuera 
  @Input() index: number;

  constructor( private activatedRoute: ActivatedRoute,
    private router: Router,
               private _clinicasService: ClinicasService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //console.log(params['termino']);
      this.clinicas = this._clinicasService.buscarClinicas(params['termino']);
      this.term = params['termino'];
     
      console.log(params['termino'])
      console.log(this.clinicas)
    })
  }

  verClinica() {
    this.router.navigate(['/clinica', this.index])

  }

}
