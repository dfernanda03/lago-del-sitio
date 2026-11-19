import {
  Mountain,
  Leaf
} from 'lucide-react';

import './PiePagina.css';

function PiePagina() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">
            <Mountain size={18} />
          </span>
          <span>
            <strong>LAGO</strong>
            <small>DEL SITIO</small>
          </span>
        </a>

        <p>
          Un refugio natural para<br />
          volver a lo esencial.
        </p>

        <div className="socials">
            <a href="https://www.instagram.com/rancho.elmagueyal?utm_source=qr&dmpr=MTRscWlnaDdpNzhrcA==" aria-label="Instagram" target="_blank" rel="noreferrer">
                <span className="social-letter">◎</span>
            </a>

            <a href="https://www.facebook.com/share/1EC5qdvhXV/" aria-label="Facebook" target="_blank" rel="noreferrer">
                <span className="social-letter">f</span>
            </a>
         </div>
    </div> 

      <div className="footer-links">
        <div>
          <span>EXPLORA</span>
          <a href="#sobre">Nosotros</a>
          <a href="#servicios">Experiencias</a>
          <a href="#galeria">Galería</a>
        </div>

        <div>
          <span>PLANEa</span>
          <a href="#contacto">Reservar</a>
          <a href="#contacto">Ubicación</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div>
          <span>LEGAL</span>
          <a href="#contacto">Privacidad</a>
          <a href="#contacto">Condiciones</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Lago del Sitio. Todos los derechos reservados.</span>
        <span>
          Hecho con respeto por la naturaleza <Leaf size={13} />
        </span>
      </div>
    </footer>
  );
}

export default PiePagina;
