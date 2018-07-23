
import { Routes } from '@angular/router';
import { RutaloginComponent } from './rutalogin/rutalogin.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';

export const ARREGLORUTAS: Routes = [
    {
        component: RutaloginComponent,
        path: 'login',
    },
    {
        component: HomeComponent,
        path: 'home',
        children: [
            {
                path: 'cliente',
                component: ClienteComponent
            },
            {
                path: '',
                redirectTo: 'cliente',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];