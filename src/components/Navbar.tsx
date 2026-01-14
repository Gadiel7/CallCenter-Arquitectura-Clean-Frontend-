import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SAADS</div>

      <div className="navbar-links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/panel">Panel</NavLink>
        <NavLink to="/callcenter">Call Center</NavLink>
        <NavLink to="/marketing">Marketing</NavLink>
        <NavLink to="/registro">Registro</NavLink>
      </div>
    </nav>
  );
}
