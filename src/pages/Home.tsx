import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-wrapper">
      {/* HERO */}
      <section className="home-hero">
        <h1>Sistema Universitario SAADS</h1>
        <p>
          Plataforma integral para la gestión de contactos estudiantiles,
          seguimiento del Call Center y análisis estratégico del área de
          Marketing.
        </p>
      </section>

      {/* RESUMEN */}
      <section className="home-summary">
        <div className="summary-card blue">
          <h3>Gestión Centralizada</h3>
          <p>
            Controla y registra los contactos realizados a estudiantes en un
            solo sistema.
          </p>
        </div>

        <div className="summary-card green">
          <h3>Seguimiento en Tiempo Real</h3>
          <p>
            Visualiza estados de contacto, métricas y resultados actualizados.
          </p>
        </div>

        <div className="summary-card orange">
          <h3>Análisis Estratégico</h3>
          <p>
            Apoya al área de Marketing con datos reales y confiables.
          </p>
        </div>
      </section>

      {/* ACCESOS PRINCIPALES */}
      <section className="home-actions">
        <Link to="/panel" className="home-action-card">
          <span className="icon">📊</span>
          <h4>Panel de Control</h4>
          <p>Visualiza métricas, gráficos y resumen general.</p>
        </Link>

        <Link to="/callcenter" className="home-action-card">
          <span className="icon">📞</span>
          <h4>Call Center</h4>
          <p>Busca estudiantes y registra contactos.</p>
        </Link>

        <Link to="/marketing" className="home-action-card">
          <span className="icon">📈</span>
          <h4>Marketing</h4>
          <p>Consulta reportes y analiza resultados.</p>
        </Link>

        <Link to="/registro" className="home-action-card">
          <span className="icon">📝</span>
          <h4>Registro</h4>
          <p>Alta de nuevos estudiantes en el sistema.</p>
        </Link>
      </section>

      {/* FOOTER INFORMATIVO */}
      <footer className="home-footer">
        <p>
          Sistema desarrollado para a la gestión académica y administrativa
          Call Center UPDS.
        </p>
        <span>© 2026 – Universidad Privada Domingo Savio</span>
      </footer>
    </div>
  );
}
