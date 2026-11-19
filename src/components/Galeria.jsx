
import { Play } from 'lucide-react';

import videoActividades from '../assets/Atardecer.mp4';
import videoLago from '../assets/lago.mp4';
import videoNaturaleza from '../assets/naturaleza.mp4';

import './Galeria.css';

const gallery = [
  {
    title: 'Atardecer',
    video: videoActividades,
    className: 'gallery-actividades',
  },
  {
    title: 'El lago',
    video: videoLago,
    className: 'gallery-lago',
  },
  {
    title: 'Naturaleza',
    video: videoNaturaleza,
    className: 'gallery-naturaleza',
  },
];

function Galeria() {
  return (
    <section className="section gallery-section" id="galeria">

      <div className="section-heading compact">
        <div>
          <p className="eyebrow">POSTALES DEL SITIO</p>
          <h2>
            Un vistazo a<br />
            <em>lo que te espera.</em>
          </h2>
        </div>

        <p className="heading-note">
          La naturaleza siempre<br />
          tiene algo que contar.
        </p>
      </div>

      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <article
            className={`gallery-card ${item.className}`}
            key={item.title}
          >
            <video
              className="gallery-video"
              src={item.video}
              controls
              muted
              playsInline
              preload="metadata"
              aria-label={`Video de ${item.title}`}
            />

            <div className="gallery-card-info">
              <span>0{index + 1} / 03</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <div className="media-note">
        <div>
          <Play size={17} fill="currentColor" />
          <span>Recorrido visual del parque</span>
        </div>

        <p>
          Explora nuestros senderos, rincones y paisajes antes de llegar.
        </p>
      </div>

    </section>
  );
}

export default Galeria;
