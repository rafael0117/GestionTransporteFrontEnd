export interface Viaje {
  idViaje: number;
  fechaSalida: string;
  fechaLlegada: string;
  incidencias: string | null;
  precio: number;
  modelo: string;
  marca: string;
  anio: number;
  capacidad: number;
  placa: string;
  nombre: string;
}