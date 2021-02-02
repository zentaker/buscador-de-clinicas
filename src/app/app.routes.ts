import { Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ClinicasComponent } from './components/clinicas/clinicas.component';
import { ClinicaComponent } from './components/clinica/clinica.component';
import { BuscadorComponent } from './components/buscador/buscador.component';





const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'about', component: AboutComponent },
    {path: 'clinicas', component: ClinicasComponent },
    {path: 'clinica/:id', component: ClinicaComponent },
    {path: 'buscar/:termino', component: BuscadorComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
