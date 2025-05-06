import { Component, OnInit } from '@angular/core';
import { BusService } from '../../../Service/bus.service';
import { DestinoService } from '../../../Service/destino.service';
import { ViajeService } from '../../../Service/viaje.service';
import { PersonalService } from '../../../Service/personal.service';
import { RevisionBusService } from '../../../Service/revision-bus.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-home',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  roles: string[] = [];
  cantidadBuses: number = 0;
  cantidadDestinos: number = 0;
  cantidadViajes: number = 0;
  cantidadPersonal: number = 0;
  cantidadRevisiones: number = 0;

  constructor(
    private busService: BusService,
    private destinoService: DestinoService,
    private viajeService: ViajeService,
    private personalService: PersonalService,
    private revisionBusService: RevisionBusService
  ) {}

  ngOnInit(): void {
    const rolesStorage = localStorage.getItem('roles');
    if (rolesStorage) {
      this.roles = JSON.parse(rolesStorage);
    }

    if (this.hasRole('ADMIN')) {
      this.cargarDatosAdmin();
    }

    if (this.hasRole('SUPER')) {
      this.cargarDatosSupervisor();
    }
  }

  hasRole(role: string): boolean {
    return this.roles.includes(`ROLE_${role}`);
  }

  private cargarDatosAdmin() {
    this.busService.obtenerListaBuses().subscribe(data => this.cantidadBuses = data.length);
    this.destinoService.obtenerDestinos().subscribe(data => this.cantidadDestinos = data.length);
  }

  private cargarDatosSupervisor() {
    this.viajeService.obtenerListaViajes().subscribe(data => this.cantidadViajes = data.length);
    this.personalService.listar().subscribe(data => this.cantidadPersonal = data.length);
    this.revisionBusService.listar().subscribe(data => this.cantidadRevisiones = data.length);
  }
}
