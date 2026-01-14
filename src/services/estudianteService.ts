import axios from "../api/axiosConfig";
import type { Estudiante } from "../models/Estudiante";

/**
 * Obtener estudiante por ID
 */
export const obtenerEstudiantePorId = async (id: number): Promise<Estudiante> => {
  const response = await axios.get(`/CallCenter/estudiantes/${id}`);
  return response.data;
};

/**
 * Actualizar celular del estudiante
 */
export const actualizarCelular = async (
  id: number,
  celular: string
) => {
  await axios.put(`/Registro/${id}`, {
    celular,
  });
};
