import { Routes } from '@angular/router';
import { ListBusComponent } from './admin/Bus/list-bus/list-bus.component';
import { CreateBusComponent } from './admin/Bus/create-bus/create-bus.component';
import { ListDestinoComponent } from './admin/Destino/list-destino/list-destino.component'; // Ruta para listar destinos
import { CreateDestinoComponent } from './admin/Destino/create-destino/create-destino.component'; // Ruta para crear destino
import { ListViajeComponent } from './admin/Viaje/list-viaje/list-viaje.component';

export const routes: Routes = [
  { path: 'listar-buses', component: ListBusComponent },
  { path: 'crear-bus', component: CreateBusComponent },
  { path: 'listar-destinos', component: ListDestinoComponent }, // Ruta para listar destinos
  { path: 'crear-destino', component: CreateDestinoComponent }, // Ruta para crear destinos
  { path: 'viajes', component: ListViajeComponent }, // ✅ Agrega e
  { path: '', redirectTo: '/listar-buses', pathMatch: 'full' }
];
