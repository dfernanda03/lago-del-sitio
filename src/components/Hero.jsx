
import {
  ArrowRight,
  Leaf
} from 'lucide-react';

import heroLago from '../assets/hero-lago.png';
import './Hero.css';

function Hero() {
  return (
    <section
      className="hero"
      id="inicio"
      style={{
        backgroundImage: `url(${heroLago})`
      }}
    >

      <div className="hero-content">

        <p className="eyebrow light">
          <span></span>
          ARCOS DEL SITIO · TEPOTZOTLÁN
        </p>

        <h1>
          Reconéctate con la naturaleza y la aventura.
        </h1>

        <p className="hero-copy">
          Descubre un espacio para disfrutar del paisaje,
          compartir momentos especiales y vivir nuevas
          experiencias rodeado de naturaleza.
        </p>

        <a href="#contacto" className="button button-gold">
          DESCUBRIR EXPERIENCIAS
          <ArrowRight size={16} />
        </a>

      </div>

      <div className="hero-scroll">
        <span></span>
        DESLIZA PARA EXPLORAR
      </div>

      <div className="hero-stamp">
        <Leaf size={25} />
        <b>
          NATURALEZA<br />
          Y AVENTURA
        </b>
      </div>

    </section>
  );
}

export default Hero;
