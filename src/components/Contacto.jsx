
import { useState } from 'react';
import { Check, Send, ArrowRight } from 'lucide-react';

import './Contacto.css';

function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = new FormData(e.currentTarget);

    const nombre = datos.get('name');
    const correo = datos.get('email');
    const experiencia = datos.get('experience');
    const mensaje = datos.get('message');

    const numeroWhatsApp = '525538360532';

    const texto = `¡Hola! Me gustaría solicitar información para visitar Cabaña y Lago El Sitio.

Nombre: ${nombre}
Correo: ${correo}
Experiencia de interés: ${experiencia}

Mensaje:
${mensaje}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
  };

  return (
    <section className="section contact-section" id="contacto">

      <div className="contact-copy">
        <p className="eyebrow">TU PRÓXIMA ESCAPADA EMPIEZA AQUÍ</p>
        <h2>¿Listos para<br /><em>vivirlo?</em></h2>

        <p>
          Cuéntanos qué experiencia imaginas y te ayudamos a planearla.
          Responderemos muy pronto.
        </p>

        <div className="contact-details">
          <span>RESERVACIONES</span>
          <strong>55 3836 0532</strong>
          <span>HORARIO DE ATENCIÓN</span>
          <strong>Lun — Dom · 9:00 a 18:00</strong>
        </div>
      </div>

      <div className="form-card">
        {submitted ? (
          <div className="success-message">
            <div className="success-icon">
              <Check size={25} />
            </div>

            <h3>¡Tu solicitud está lista!</h3>

            <p>
              Abrimos WhatsApp con los datos de tu solicitud.
              Recuerda presionar Enviar para hacernos llegar tu mensaje.
            </p>

            <button
              className="button button-dark"
              type="button"
              onClick={() => setSubmitted(false)}
            >
              Enviar otra solicitud
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Nombre completo
                <input
                  required
                  name="name"
                  placeholder="¿Cómo te llamas?"
                />
              </label>

              <label>
                Correo electrónico
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="tu@correo.com"
                />
              </label>
            </div>

            <label>
              ¿Qué experiencia te interesa?
              <select name="experience" defaultValue="" required>
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option>Un día en el lago</option>
                <option>Fin de semana de camping</option>
                <option>Aventura familiar</option>
                <option>Otra experiencia</option>
              </select>
            </label>

            <label>
              Tu mensaje
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Cuéntanos un poco más..."
              />
            </label>

            <label className="check-label">
              <input required type="checkbox" />
              <span>
                Acepto el aviso de privacidad y el uso de mis datos
                para recibir respuesta.
              </span>
            </label>

            <button className="button button-dark" type="submit">
              Enviar solicitud <Send size={15} />
            </button>
          </form>
        )}
      </div>

      <div className="location-card">
        <div className="map-copy">
          <p className="eyebrow">ENCUÉNTRANOS</p>
          <h3>Arcos del Sitio</h3>

          <p>
            Tepotzotlán, Estado de México<br />
            A 45 minutos de la CDMX
          </p>

          <a
            className="text-link"
            href="https://maps.app.goo.gl/NsNcdauJKoyLZYHp8"
            target="_blank"
            rel="noreferrer"
          >
            Abrir en Google Maps <ArrowRight size={15} />
          </a>
        </div>

        <iframe
          title="Ubicación de Cabaña y Lago El Sitio"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.853147907148!2d-99.34490940000003!3d19.761392899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d223cd52646181%3A0x201c37dcb68ec4a7!2sCaba%C3%B1a%20y%20Lago%20El%20Sitio!5e0!3m2!1sen!2smx!4v1795055574070!5m2!1sen!2smx"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

    </section>
  );
}

export default Contacto;
