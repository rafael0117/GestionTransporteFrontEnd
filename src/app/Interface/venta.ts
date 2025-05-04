import { DetalleVenta } from "./detalle-venta";

export interface Venta {
    cliente: string;
  detalles: DetalleVenta[];
}
