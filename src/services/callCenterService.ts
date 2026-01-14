import axios from "axios";

const API = "http://localhost:5099/api/CallCenter";

export const obtenerEstudiante = async (id: number) => {
  const res = await axios.get(`${API}/estudiantes/${id}`);
  return res.data;
};

export const obtenerContactos = async (id: number) => {
  const res = await axios.get(`${API}/contactos/${id}`);
  return res.data;
};

export const registrarContacto = async (data: {
  estudianteId: number;
  estado: string;
  observacion: string;
}) => {
  return axios.post(`${API}/contacto`, data);
};
