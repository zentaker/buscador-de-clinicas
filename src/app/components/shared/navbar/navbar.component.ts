import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
 

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  buscarClinica( termino:string) {
    this.router.navigate(['/buscar', termino]);
    
  }

}
