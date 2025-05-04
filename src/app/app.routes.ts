import { Routes } from '@angular/router';
import { LoginComponent } from '../app/auth/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListBusComponent } from './admin/Bus/list-bus/list-bus.component';
import { ListDestinoComponent } from './admin/Destino/list-destino/list-destino.component';
import { ListViajeComponent } from './admin/Viaje/list-viaje/list-viaje.component';
import { HomeComponent } from './cliente/pages/home/home.component'; 
import { ViajesDestinoComponent } from './cliente/pages/viaje/viajes-destino/viajes-destino.component';
import { InfoViajeComponent } from './cliente/pages/viaje/info-viaje/info-viaje.component'; // Importar el componente

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  // Nueva ruta añadida para los viajes por destino
  { path: 'viajes-destino/:id', component: ViajesDestinoComponent },

  // Nueva ruta para mostrar los detalles del viaje
  { path: 'viaje/:id', component: InfoViajeComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'listar-buses', pathMatch: 'full' },
      { path: 'listar-buses', component: ListBusComponent },
      { path: 'listar-destinos', component: ListDestinoComponent },
      { path: 'viajes', component: ListViajeComponent }
    ]
  },

  { path: '**', redirectTo: '' }
];
