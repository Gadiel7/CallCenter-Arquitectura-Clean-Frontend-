export interface ContactoCallCenter {
  id: number;
  estudianteId: number;
  estado: "Contactado" | "No Contactado";
  fechaContacto: string;
}
