
import { ArrowRight } from 'lucide-react';
import './Nosotros.css';

function Nosotros() {
  return (
    <section className="section about-section" id="sobre">

      <div className="about-card">
        <p className="eyebrow">NUESTRA HISTORIA</p>

        <h2>
          Un lugar para volver<br />
          <em>a lo esencial.</em>
        </h2>

        <p>
          Lago del Sitio es un espacio familiar creado para compartir la belleza de Tepotzotlán con quienes buscan una pausa de la rutina. Aquí cada camino invita a mirar distinto y cada encuentro se vuelve recuerdo.
        </p>

        <a className="text-link" href="#contacto">
          Conoce nuestra historia
          <ArrowRight size={15} />
        </a>
      </div>

      <div className="mission-grid">

        <article>
          <span className="number">01</span>
          <h3>Misión</h3>
          <p>
            Crear experiencias memorables en contacto con la naturaleza, cuidando cada detalle y acompañando a nuestros visitantes con calidez.
          </p>
        </article>

        <article>
          <span className="number">02</span>
          <h3>Visión</h3>
          <p>
            Ser el refugio natural favorito de las familias que desean reconectar, explorar y celebrar la vida con respeto por nuestro entorno.
          </p>
        </article>

      </div>

    </section>
  );
}

export default Nosotros;
