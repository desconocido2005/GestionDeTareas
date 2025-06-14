export interface Tareas {
    id?: number;
    titulo: string;
    descripcion: string;
    estado?: string;
    prioridad?: "Alto" | "Medio" | "Bajo";
}
