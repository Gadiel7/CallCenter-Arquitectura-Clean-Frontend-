import axios from "../api/axiosConfig";
import type { DashboardMetricas } from "../models/DashboardMetricas";

export const obtenerMetricasDashboard = async (): Promise<DashboardMetricas> => {
  const response = await axios.get("/Dashboard/metricas");
  return response.data;
};
