import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import "./Dashboard.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

interface DashboardMetricas {
  totalContactos: number;
  contactados: number;
  noContactados: number;
  ultimoContacto: string;
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardMetricas | null>(null);

  useEffect(() => {
    fetch("http://localhost:5099/api/Dashboard/metricas")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return null;

  const donutData = {
    labels: ["Contactados", "No Contactados"],
    datasets: [
      {
        data: [data.contactados, data.noContactados],
        backgroundColor: ["#22c55e", "#ef4444"],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: ["Contactados", "No Contactados"],
    datasets: [
      {
        label: "Cantidad",
        data: [data.contactados, data.noContactados],
        backgroundColor: ["#22c55e", "#ef4444"],
      },
    ],
  };

  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">Panel de Control</h2>

      {/* CARDS */}
      <div className="dashboard-cards">
        <div className="card blue">
          <span>Total Contactos</span>
          <strong>{data.totalContactos}</strong>
        </div>

        <div className="card green">
          <span>Contactados</span>
          <strong>{data.contactados}</strong>
        </div>

        <div className="card red">
          <span>No Contactados</span>
          <strong>{data.noContactados}</strong>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="dashboard-content">
        <div className="panel">
          <h3>Distribución de contactos</h3>
          <Doughnut data={donutData} />
        </div>

        <div className="panel">
          <h3>Comparativa</h3>
          <Bar data={barData} />
        </div>
      </div>

      <div className="last-update">
        Último contacto:{" "}
        {new Date(data.ultimoContacto).toLocaleString()}
      </div>
    </div>
  );
}
