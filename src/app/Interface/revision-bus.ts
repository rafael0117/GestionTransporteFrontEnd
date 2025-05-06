export interface RevisionBus {
    idRevision: number;
    fechaRevision: string;
    idBus: number;
    idPersonal: number;
    placaBus: string;
    modeloBus: string;
    nombresPersonal: string;
    apellidosPersonal: string;
    observaciones?: string | null;
  }
  