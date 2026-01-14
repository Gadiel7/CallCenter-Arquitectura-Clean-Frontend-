import { useEffect, useState } from "react";
import { obtenerContactosMarketing, exportarContactos } from "../services/marketingService";
import type { EstudianteMarketing } from "../models/EstudianteMarketing";
import "./Marketing.css";

export default function Marketing() {
  const [contactos, setContactos] = useState<EstudianteMarketing[]>([]);

  useEffect(() => {
    cargar();
  }, []);

  const cargar = async () => {
    const data = await obtenerContactosMarketing();
    setContactos(data);
  };

  return (
    <div className="marketing-wrapper">
      <div className="marketing-card">
        {/* HEADER */}
        <div className="marketing-header">
          <h2>Marketing</h2>

          <button
            className="btn-export"
            onClick={exportarContactos}
          >
            Exportar contactos
          </button>
        </div>

        {/* TABLA */}
        <div className="marketing-table-wrapper">
          <table className="marketing-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Celular</th>
              </tr>
            </thead>
            <tbody>
              {contactos.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.nombre}</td>
                  <td>{c.celular}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {contactos.length === 0 && (
            <p className="empty">No hay contactos para mostrar</p>
          )}
        </div>
      </div>
    </div>
  );
}
