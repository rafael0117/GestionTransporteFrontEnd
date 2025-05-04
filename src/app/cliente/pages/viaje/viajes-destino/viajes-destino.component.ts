import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ViajeService } from '../../../../Service/viaje.service';
import { Viaje } from '../../../../Interface/viaje';
import { DestinoService } from '../../../../Service/destino.service';  // Inyectar el servicio de destino
import { Destino } from '../../../../Interface/destino';  // Importa la interfaz de destino
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar.component';
import { FooterComponent } from '../../layout/footer.component';

@Component({
  selector: 'app-viajes-destino',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './viajes-destino.component.html',
  styleUrl: './viajes-destino.component.css'
})
export class ViajesDestinoComponent implements OnInit {
  viajes: Viaje[] = [];
  idDestino!: number;

  // Variables para mostrar información del destino
  nombreDestino: string = '';
  imagenDestino: string = '';


  constructor(
    private viajeService: ViajeService,
    private destinoService: DestinoService, // Inyectar el servicio de destino
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idDestino = Number(this.route.snapshot.paramMap.get('id'));
    if (this.idDestino) {
      // Obtener todos los destinos
      this.destinoService.obtenerDestinos().subscribe(destinos => {
        // Filtrar el destino por el idDestino
        const destino = destinos.find(d => d.idDestino === this.idDestino);
        
        if (destino) {
          // Asignar el nombre y la imagen del destino
          this.nombreDestino = destino.nombre;
          this.imagenDestino = destino.imagenUrl || 'https://via.placeholder.com/1200x300?text=Destino';
        }
      });

      // Obtener los viajes para el destino
      this.viajeService.obtenerViajesPorDestino(this.idDestino).subscribe(data => {
        this.viajes = data;
      });
    }
  }
}
