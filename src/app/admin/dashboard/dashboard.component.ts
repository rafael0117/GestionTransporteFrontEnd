import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { DestinoService } from '../../Service/destino.service';
import { ViajeService } from '../../Service/viaje.service';
import { BusService } from '../../Service/bus.service';
import { Destino } from '../../Interface/destino';
import { Viaje } from '../../Interface/viaje';
import { Bus } from '../../Interface/bus';
import { ListBusComponent } from '../Bus/list-bus/list-bus.component';
import { CreateBusComponent } from '../Bus/create-bus/create-bus.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,RouterModule,ListBusComponent,CreateBusComponent,CommonModule,HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  username: string | null = '';
  roles: string[] = [];
  expiresAt: string | null = '';

  destinos: Destino[] = [];
  viajes: Viaje[] = [];
  buses: Bus[] = [];

  constructor(
    private destinoService: DestinoService,
    private viajeService: ViajeService,
    private busService: BusService
  ) {}

  ngOnInit() {
    this.username = localStorage.getItem('username');
    const rolesStorage = localStorage.getItem('roles');
    if (rolesStorage) {
      this.roles = JSON.parse(rolesStorage);
    }
    const expiresAtStorage = localStorage.getItem('expiresAt');
    if (expiresAtStorage) {
      const expiresDate = new Date(Number(expiresAtStorage));
      this.expiresAt = expiresDate.toLocaleString();
    }

    this.destinoService.obtenerDestinos().subscribe({
      next: (data: Destino[]) => {
        this.destinos = data;
        console.log('[Dashboard] Destinos:', data);
      },
      error: (err: any) => this.handleError('destinos', err)
    });

    this.viajeService.obtenerListaViajes().subscribe({
      next: (data: Viaje[]) => {
        this.viajes = data;
        console.log('[Dashboard] Viajes:', data);
      },
      error: (err: any) => this.handleError('viajes', err)
    });

    this.busService.obtenerListaBuses().subscribe({
      next: (data: Bus[]) => {
        this.buses = data;
        console.log('[Dashboard] Buses:', data);
      },
      error: (err: any) => this.handleError('buses', err)
    });
  }

  private handleError(tipo: string, error: any) {
    console.error(`[Dashboard] Error al obtener ${tipo}`, error);
    if (error.status === 403) {
      alert(`Acceso denegado al obtener ${tipo}. Verifica tu token o permisos.`);
    }
  }
}
