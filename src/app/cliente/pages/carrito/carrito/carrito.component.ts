import { Component, OnInit } from '@angular/core';
import { VentaService } from '../../../../Service/venta.service';
import { Venta } from '../../../../Interface/venta';
import { NavbarComponent } from '../../layout/navbar.component';
import { FooterComponent } from '../../layout/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: Venta | undefined;

  constructor(private ventaService: VentaService) {}

  ngOnInit(): void {
    this.obtenerCarrito();
  }

  obtenerCarrito(): void {
    this.ventaService.obtenerCarrito('anonimo').subscribe({
      next: response => {
        this.carrito = response;
      },
      error: err => {
        console.error('Error al obtener carrito:', err);
      }
    });
  }

  procesarVenta(): void {
    // Aquí agregarías el proceso de venta cuando se hace clic en proceder con la compra
    console.log('Procediendo con la venta...');
  }
}
