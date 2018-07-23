import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import {RouterModule} from "@angular/router";
import {ARREGLORUTAS} from './app.routes';
import { AppComponent } from './app.component';
import { RutaloginComponent } from './rutalogin/rutalogin.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import{FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ComponenteComponent } from './componente/componente.component';
import { NombreclienteComponent } from './componente/nombrecliente/nombrecliente.component';
import { FotoclienteComponent } from './componente/fotocliente/fotocliente.component';
import { BotonanteComponent } from './componente/botonante/botonante.component';
import { BotonsigComponent } from './componente/botonsig/botonsig.component';
import { BotonconsultarComponent } from './componente/botonconsultar/botonconsultar.component';
import { BotontranferirComponent } from './componente/botontranferir/botontranferir.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaloginComponent,
    HomeComponent,
    ClienteComponent,
    ComponenteComponent,
    NombreclienteComponent,
    FotoclienteComponent,
    BotonanteComponent,
    BotonsigComponent,
    BotonconsultarComponent,
    BotontranferirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      ARREGLORUTAS,
      {
        useHash: true
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
