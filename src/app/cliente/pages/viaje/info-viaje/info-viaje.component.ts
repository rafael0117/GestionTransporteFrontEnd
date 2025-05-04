import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViajeService } from '../../../../Service/viaje.service';
import { VentaService } from '../../../../Service/venta.service';
import { Venta } from '../../../../Interface/venta';
import { Viaje } from '../../../../Interface/viaje';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../../layout/footer.component';
import { NavbarComponent } from '../../layout/navbar.component';

@Component({
  selector: 'app-info-viaje',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FooterComponent,
    NavbarComponent],
  templateUrl: './info-viaje.component.html',
  styleUrls: ['./info-viaje.component.css']
})
export class InfoViajeComponent implements OnInit {
  viaje: Viaje | undefined;
  cantidad: number = 1;

  constructor(
    private viajeService: ViajeService,
    private ventaService: VentaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idViaje = Number(this.route.snapshot.paramMap.get('id'));

    this.viajeService.obtenerListaViajes().subscribe(viajes => {
      const viajeEncontrado = viajes.find(v => v.idViaje === idViaje);
      if (viajeEncontrado) {
        this.viaje = viajeEncontrado;
      }
    });
  }

  agregarAlCarrito(): void {
    if (!this.viaje) return;

    if (this.cantidad > 0 && this.cantidad <= this.viaje.cantidadDisponible) {
      const venta: Venta = {
        cliente: 'anonimo', // o tomar de un servicio de autenticación
        detalles: [{
          idViaje: this.viaje.idViaje,
          cantidad: this.cantidad
        }]
      };

      this.ventaService.agregarAlCarrito(venta).subscribe({
        next: response => {
          alert('Agregado correctamente al carrito');
          console.log(response);
        },
        error: err => {
          alert('Error al agregar al carrito: ' + err.error.message);
        }
      });
    } else {
      alert('Cantidad no válida o insuficiente disponible');
    }
  }
}
