import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DestinoService } from '../../Service/destino.service';
import { ViajeService } from '../../Service/viaje.service';
import { BusService } from '../../Service/bus.service';
import { PersonalService } from '../../Service/personal.service';
import { RevisionBusService } from '../../Service/revision-bus.service';

import { Destino } from '../../Interface/destino';
import { Viaje } from '../../Interface/viaje';
import { Bus } from '../../Interface/bus';
import { Personal } from '../../Interface/personal';
import { RevisionBus } from '../../Interface/revision-bus';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, HttpClientModule],
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
  personal: Personal[] = [];
  revisiones: RevisionBus[] = [];

  constructor(
    private destinoService: DestinoService,
    private viajeService: ViajeService,
    private busService: BusService,
    private personalService: PersonalService,
    private revisionBusService: RevisionBusService
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

    if (this.hasRole('ADMIN') || this.hasRole('SUPER')) {
      this.destinoService.obtenerDestinos().subscribe({
        next: (data: Destino[]) => this.destinos = data,
        error: (err: any) => this.handleError('destinos', err)
      });

      this.busService.obtenerListaBuses().subscribe({
        next: (data: Bus[]) => this.buses = data,
        error: (err: any) => this.handleError('buses', err)
      });
    }

    if (this.hasRole('SUPER')) {
      this.viajeService.obtenerListaViajes().subscribe({
        next: (data: Viaje[]) => this.viajes = data,
        error: (err: any) => this.handleError('viajes', err)
      });

      this.personalService.listar().subscribe({
        next: (data: Personal[]) => this.personal = data,
        error: (err: any) => this.handleError('personal', err)
      });

      this.revisionBusService.listar().subscribe({
        next: (data: RevisionBus[]) => this.revisiones = data,
        error: (err: any) => this.handleError('revisión de buses', err)
      });
    }
  }

  hasRole(role: string): boolean {
    return this.roles.includes(`ROLE_${role.toUpperCase()}`);
  }

  private handleError(tipo: string, error: any) {
    console.error(`[Dashboard] Error al obtener ${tipo}`, error);
    if (error.status === 403) {
      alert(`Acceso denegado al obtener ${tipo}. Verifica tu token o permisos.`);
    }
  }
}
