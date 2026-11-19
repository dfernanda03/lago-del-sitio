
import {
  ArrowRight,
  Compass,
  Leaf,
  Mountain,
  TentTree
} from 'lucide-react';

import './Experiencias.css';
import imagenCabana from '../assets/cabaña.png';
import imagenCaminata from '../assets/caminata.png';
import imagenCaballo from '../assets/paseos-caballo.png';
import imagenCamping from '../assets/zona-acampado.png';

const services = [
  {
    title: 'Restaurante en la cabaña',
    description: 'Sabores de la región, café de olla y una mesa con vista al lago.',
    icon: Leaf,
    className: 'scene-cabin',
    label: 'SABORES LOCALES',
    image: imagenCabana,
  },
  {
    title: 'Paseo a caballo',
    description: 'Recorre senderos tranquilos y descubre el paisaje a otro ritmo.',
    icon: Compass,
    className: 'scene-horse',
    label: 'AVENTURA',
     image: imagenCaballo,
  },
  {
    title: 'Senderismo y naturaleza',
    description: 'Rutas para respirar profundo, observar aves y desconectarte.',
    icon: Mountain,
    className: 'scene-hike',
    label: 'AIRE LIBRE',
    image: imagenCaminata,
  },
  {
    title: 'Camping y descanso',
    description: 'Noches bajo las estrellas y mañanas que comienzan junto al lago.',
    icon: TentTree,
    className: 'scene-camp',
    label: 'DESCANSO',
    image: imagenCamping,
  },
];

function Experiencias() {
  return (
    <section className="section section-services" id="servicios">

      <div className="section-heading">
        <div>
          <p className="eyebrow">LO QUE PUEDES VIVIR</p>
          <h2>
            Experiencias que<br />
            <em>se quedan contigo.</em>
          </h2>
        </div>

        <p className="heading-note">
          Cada visita tiene su propio ritmo.<br />
          Encuentra el tuyo.
        </p>
      </div>

      <div className="service-grid">

  {services.map(({ title, description, icon: Icon, className, label, image }) => (
    <article className="service-card" key={title}>

      <div
        className={`service-image ${className}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <span className="image-label">{label}</span>
        <Icon className="image-icon" size={32} />
      </div>

      <div className="service-body">
        <h3>{title}</h3>
        <p>{description}</p>

        <a
          href="#contacto"
          aria-label={`Conocer más sobre ${title}`}
        >
          CONOCER MÁS
          <ArrowRight size={14} />
        </a>
      </div>

    </article>
  ))}

</div>

    </section>
  );
}

export default Experiencias;
