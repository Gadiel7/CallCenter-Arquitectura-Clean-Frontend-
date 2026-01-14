import { useState } from "react";
import { actualizarCelular } from "../services/registroService";
import "./Registro.css";

export default function Registro() {
  const [id, setId] = useState<number>(0);
  const [celular, setCelular] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);

  const actualizar = async () => {
    setMsg("");
    setError(false);

    if (!id || celular.trim().length < 7) {
      setMsg("Ingrese un ID válido y un número correcto");
      setError(true);
      return;
    }

    try {
      await actualizarCelular(id, celular);
      setMsg("Contacto actualizado correctamente");
      setCelular("");
    } catch {
      setMsg("Estudiante no encontrado");
      setError(true);
    }
  };

  return (
    <div className="registro-wrapper">
      <div className="registro-card">
        <h2>Registro</h2>
        <p className="registro-desc">
          Actualiza el número de contacto del estudiante para futuras llamadas.
        </p>

        <div className="registro-form">
          <input
            type="number"
            placeholder="ID del estudiante"
            value={id || ""}
            onChange={(e) => setId(Number(e.target.value))}
          />

          <input
            type="text"
            placeholder="Nuevo número de celular"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />

          <button onClick={actualizar}>Actualizar contacto</button>
        </div>

        {msg && (
          <div className={error ? "msg error" : "msg success"}>
            {msg}
          </div>
        )}
      </div>
    </div>
  );
}
