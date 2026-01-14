import api from "../api/axiosConfig";

export const actualizarCelular = async (
  id: number,
  celular: string
) => {
  await api.put(`/Registro/${id}/celular`, {
    celular,
  });
};
