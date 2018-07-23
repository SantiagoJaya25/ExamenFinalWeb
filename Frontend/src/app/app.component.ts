import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
cliente=[
  {
 idcliente: 1,
 nombre:'Santiago Jaya',
 nombreImagen1:'cliente1'
  },
  {
    idcliente: 2,
    nombre:'Carlos Brito',
    nombreImagen1:'cliente2'
     },
     {
      idcliente: 3,
      nombre:'Estefania Hallo',
      nombreImagen1:'cliente3'
       },
       {
        idcliente: 4,
        nombre:'Elizabeth Cando',
        nombreImagen1:'cliente4'
         },
         {
          idcliente: 5,
          nombre:'Andres Jaya',
          nombreImagen1:'cliente5'
           },
           {
            idcliente: 6,
            nombre:'Alejandra Alcivar',
            nombreImagen1:'cliente6'
             },
             {
              idcliente: 7,
              nombre:'Gloria Marin',
              nombreImagen1:'cliente7'
               },
               {
                idcliente: 8,
                nombre:'Elsa Vasco',
                nombreImagen1:'cliente8'
                 },
                 {
                  idcliente: 9,
                  nombre:'Jose Perez',
                  nombreImagen1:'cliente9'
                   },
                   {
                    idcliente: 10,
                    nombre:'Manuel Ruiz',
                    nombreImagen1:'cliente10'
                     },
];
  
}
