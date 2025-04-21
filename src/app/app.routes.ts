import { Routes } from '@angular/router';
import { ListBusComponent } from './Bus/list-bus/list-bus.component';
import { CreateBusComponent } from './Bus/create-bus/create-bus.component';
import { ListDestinoComponent } from './Destino/list-destino/list-destino.component'; // Ruta para listar destinos
import { CreateDestinoComponent } from './Destino/create-destino/create-destino.component'; // Ruta para crear destino

export const routes: Routes = [
  { path: 'listar-buses', component: ListBusComponent },
  { path: 'crear-bus', component: CreateBusComponent },
  { path: 'listar-destinos', component: ListDestinoComponent }, // Ruta para listar destinos
  { path: 'crear-destino', component: CreateDestinoComponent }, // Ruta para crear destinos
  { path: '', redirectTo: '/listar-buses', pathMatch: 'full' }
];
