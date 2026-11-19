
import { useState } from 'react';

import {
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

import './Encabezado.css';
import logo from '../assets/logo.png';

function Encabezado() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">

      {/* Logotipo y nombre del sitio */}
      <a href="#inicio" className="brand" onClick={closeMenu}>

        <img
          src={logo}
          alt="Logotipo de Lago del Sitio"
          className="logo"
        />

        <span>
          <strong>LAGO DEL SITIO</strong>
          <small>Naturaleza y aventura en familia</small>
        </span>

      </a>

      {/* Botón del menú para dispositivos móviles */}
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>

      {/* Navegación */}
      <nav
        className={menuOpen ? 'main-nav is-open' : 'main-nav'}
        aria-label="Navegación principal"
      >
        <a href="#sobre" onClick={closeMenu}>
          Nosotros
        </a>

        <a href="#servicios" onClick={closeMenu}>
          Experiencias
        </a>

        <a href="#galeria" onClick={closeMenu}>
          Galería
        </a>

        <a href="#contacto" onClick={closeMenu}>
          Contacto
        </a>

        <a
          className="header-cta"
          href="#contacto"
          onClick={closeMenu}
        >
          RESERVAR
          <ArrowRight size={15} />
        </a>

      </nav>

    </header>
  );
}

export default Encabezado;
