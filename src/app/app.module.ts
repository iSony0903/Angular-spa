import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS
import { APP_ROUTING } from "./app.routes";

// servicios
import { HeroesService } from './servicios/heroes.service';
import { VillanosService } from './servicios/villanos.service';

// COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { VillanoComponent } from './components/villano/villano.component';
import { VillanosComponent } from './components/villanos/villanos.component';
import { VillanoTarjetaComponent } from './components/villano-tarjeta/villano-tarjeta.component';
import { NombrePilaComponent } from './components/nombre-pila/nombre-pila.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    BuscadorComponent,
    VillanoComponent,
    VillanosComponent,
    VillanoTarjetaComponent,
    NombrePilaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService,
    VillanosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
