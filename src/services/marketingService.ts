import api from "../api/axiosConfig";
import { saveAs } from "file-saver";
import type { Estudiante } from "../models/Estudiante";

// Mostrar contactos
export const obtenerContactosMarketing = async (): Promise<Estudiante[]> => {
  const res = await api.get("/Marketing/contactos");
  return res.data;
};

// Exportar contactos
export const exportarContactos = async () => {
  const response = await api.get("/Marketing/exportar", {
    responseType: "blob",
  });

  saveAs(response.data, "contactos_marketing.csv");
};
