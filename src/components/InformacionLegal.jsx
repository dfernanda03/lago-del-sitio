
import { ArrowRight } from 'lucide-react';

import './InformacionLegal.css';

function InformacionLegal() {
  return (
    <section className="legal-section">
      <div>
        <p className="eyebrow">TRANSPARENCIA Y CONFIANZA</p>
        <h2>
          Información para<br />
          <em>visitar con calma.</em>
        </h2>
      </div>

      <div className="legal-columns">
        <article>
          <h3>Aviso de privacidad</h3>
          <p>
            Usamos tus datos únicamente para responder solicitudes y
            ayudarte a organizar tu visita. Nunca compartiremos tu
            información con terceros sin tu autorización.
          </p>
          <a href="#contacto">
            Leer aviso completo <ArrowRight size={14} />
          </a>
        </article>

        <article>
          <h3>Condiciones de visita</h3>
          <p>
            Consulta horarios, recomendaciones y lineamientos para
            que tu experiencia sea segura, respetuosa y disfrutable
            para todos.
          </p>
          <a href="#servicios">
            Conocer condiciones <ArrowRight size={14} />
          </a>
        </article>
      </div>
    </section>
  );
}

export default InformacionLegal;
