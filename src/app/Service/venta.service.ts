import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venta } from '../Interface/venta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private apiUrl = 'http://localhost:8080/api/ventas'; // Cambia si tu backend usa otro puerto

  constructor(private http: HttpClient) {}

  agregarAlCarrito(venta: Venta): Observable<any> {
    return this.http.post(`${this.apiUrl}/agregar-carrito`, venta);
  }
 }