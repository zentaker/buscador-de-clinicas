import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//rutas
import { APP_ROUTING } from './app.routes';


//servicios
import { ClinicasService } from './servicios/clinicas.service';


//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ClinicasComponent } from './components/clinicas/clinicas.component';
import { ClinicaComponent } from './components/clinica/clinica.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ClinicaTarjetaComponent } from './components/clinica-tarjeta/clinica-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ClinicasComponent,
    ClinicaComponent,
    BuscadorComponent,
    ClinicaTarjetaComponent
  
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ClinicasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
