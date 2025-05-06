import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../Interface/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private apiUrl = 'http://localhost:8080/api/venta'; // <- corregido

  constructor(private http: HttpClient) {}

  // Método para agregar productos al carrito
  agregarAlCarrito(venta: Venta): Observable<any> {
    return this.http.post(`${this.apiUrl}/agregar`, venta);
  }

  // Método para obtener el carrito de un cliente
  obtenerCarrito(cliente: string): Observable<Venta> {
    return this.http.get<Venta>(`${this.apiUrl}/${cliente}`);
  }
}
