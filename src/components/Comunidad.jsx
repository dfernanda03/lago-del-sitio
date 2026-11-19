
import { Users, Compass, Heart } from 'lucide-react';

import './Comunidad.css';

function Comunidad() {
  return (
    <section className="community-band">
      <div>
        <p className="eyebrow">CREZCAMOS CON NUESTRA COMUNIDAD</p>
        <h2>La aventura también<br /><em>se comparte.</em></h2>
      </div>

      <div className="community-items">
        <article>
          <Users size={20} />
          <h3>Productores locales</h3>
          <p>Sabores y productos que cuentan la historia de nuestra región.</p>
        </article>

        <article>
          <Compass size={20} />
          <h3>Guías y anfitriones</h3>
          <p>Personas que conocen cada rincón y te reciben como en casa.</p>
        </article>

        <article>
          <Heart size={20} />
          <h3>Turismo responsable</h3>
          <p>Disfrutamos hoy mientras cuidamos el mañana.</p>
        </article>
      </div>
    </section>
  );
}

export default Comunidad;
