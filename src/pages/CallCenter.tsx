import { useState } from "react";
import "./CallCenter.css";

interface Estudiante {
  id: number;
  nombre: string;
  celular: string;
}

interface Contacto {
  fechaContacto: string;
  estado: string;
}

export default function CallCenter() {
  const [estudianteId, setEstudianteId] = useState("");
  const [estudiante, setEstudiante] = useState<Estudiante | null>(null);
  const [contactos, setContactos] = useState<Contacto[]>([]);
  const [estado, setEstado] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const limpiarMensajes = () => {
    setError("");
    setSuccess("");
  };

  const buscarEstudiante = async () => {
    limpiarMensajes();

    const id = Number(estudianteId);

    if (!id || id <= 0) {
      setError("Ingrese un ID válido");
      setEstudiante(null);
      setContactos([]);
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5099/api/CallCenter/estudiantes/${id}`
      );

      if (!res.ok) {
        setError("Estudiante no encontrado");
        setEstudiante(null);
        setContactos([]);
        return;
      }

      const data = await res.json();
      setEstudiante(data);

      const contactosRes = await fetch(
        `http://localhost:5099/api/CallCenter/contactos/${id}`
      );
      const contactosData = await contactosRes.json();
      setContactos(contactosData);
    } catch {
      setError("Error al conectar con el servidor");
    }
  };

  const guardarContacto = async () => {
    limpiarMensajes();

    if (!estudiante) {
      setError("Debe buscar un estudiante primero");
      return;
    }

    if (!estado) {
      setError("Seleccione un estado");
      return;
    }

    await fetch("http://localhost:5099/api/CallCenter/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        estudianteId: estudiante.id,
        estado,
      }),
    });

    setEstado("");
    setSuccess("Contacto registrado correctamente");
    buscarEstudiante();
  };

  return (
    <div className="callcenter-page">
      <h2 className="callcenter-title">Call Center</h2>

      <div className="callcenter-grid">
        {/* IZQUIERDA */}
        <div className="callcenter-card">
          <h4>Buscar estudiante</h4>

          <div className="cc-search">
            <input
              type="number"
              placeholder="ID del estudiante"
              value={estudianteId}
              onChange={(e) => setEstudianteId(e.target.value)}
            />
            <button className="btn-primary" onClick={buscarEstudiante}>
              Buscar
            </button>
          </div>

          {error && <div className="msg error">{error}</div>}
          {success && <div className="msg success">{success}</div>}

          {estudiante && (
            <>
              <div className="estudiante-info">
                <strong>Nombre:</strong> {estudiante.nombre}
                <br />
                <strong>Celular:</strong> {estudiante.celular}
              </div>

              <hr />

              <h4>Registrar contacto</h4>

              <select
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="">Seleccione estado</option>
                <option value="Contactado">Contactado</option>
                <option value="No Contactado">No Contactado</option>
              </select>

              <button className="btn-success" onClick={guardarContacto}>
                Guardar contacto
              </button>
            </>
          )}
        </div>

        {/* DERECHA */}
        <div className="callcenter-card">
          <h4>Historial de contactos</h4>

          {contactos.length === 0 ? (
            <p className="empty">No hay registros</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {contactos.map((c, i) => (
                  <tr key={i}>
                    <td>
                      {new Date(c.fechaContacto).toLocaleString()}
                    </td>
                    <td className={c.estado === "Contactado" ? "ok" : "bad"}>
                      {c.estado}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
