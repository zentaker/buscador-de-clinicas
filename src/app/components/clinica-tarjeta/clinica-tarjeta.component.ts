import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clinica-tarjeta',
  templateUrl: './clinica-tarjeta.component.html'
})
export class ClinicaTarjetaComponent implements OnInit {
  @Input() clinica: any ={}; //la propiedad heroe puede venir de afuera 
  @Input() index: number;

  //el elemento que el padre va a estar esuchando
  @Output() clinicaSeleccionada: EventEmitter<number>;

  constructor(private router: Router) { 
    this.clinicaSeleccionada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verClinica() {
    this.router.navigate(['/clinica', this.index])
    //this.clinicaSeleccionada.emit(this.index);

  }

}
