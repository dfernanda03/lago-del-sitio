
import { useState } from 'react';
import { ArrowRight, Star, X } from 'lucide-react';

import experiencias from '../data/experiencias';
import './Testimonios.css';

function Testimonios() {
  const [testimonios, setTestimonios] = useState(() => {
  const guardados = localStorage.getItem('testimonios');

  if (guardados) {
    return JSON.parse(guardados);
  }

  return experiencias;
});

  const [nombre, setNombre] = useState('');
  const [lugar, setLugar] = useState('');
  const [comentario, setComentario] = useState('');
  const [calificacion, setCalificacion] = useState(5);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const publicarTestimonio = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !comentario.trim()) {
      alert('Por favor, escribe tu nombre y comentario.');
      return;
    }

    const nuevoTestimonio = {
      id: Date.now(),
      nombre: nombre.trim(),
      lugar: lugar.trim() || 'Visitante',
      comentario: comentario.trim(),
      calificacion,
    };

    const nuevosTestimonios = [nuevoTestimonio, ...testimonios];

setTestimonios(nuevosTestimonios);

localStorage.setItem(
  'testimonios',
  JSON.stringify(nuevosTestimonios)
);

    setNombre('');
    setLugar('');
    setComentario('');
    setCalificacion(5);
    setMostrarFormulario(false);

    alert('¡Gracias por compartir tu experiencia!');
  };

  return (
    <section className="section testimonials-section">
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">VOCES DE LA COMUNIDAD</p>
          <h2>Historias que nos<br /><em>inspiran a seguir.</em></h2>
        </div>

        <a
          className="text-link"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setMostrarFormulario(true);
          }}
        >
          Comparte tu experiencia
          <ArrowRight size={15} />
        </a>
      </div>

      <div className="testimonial-grid">
        {testimonios.map(({ id, nombre, lugar, comentario, calificacion }) => (
          <article className="testimonial" key={id}>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((estrella) => (
                <Star
                  key={estrella}
                  size={14}
                  fill={estrella <= calificacion ? 'currentColor' : 'none'}
                />
              ))}
            </div>

            <p>“{comentario}”</p>
            <span>{nombre} · {lugar}</span>
          </article>
        ))}
      </div>

      {mostrarFormulario && (
        <div className="testimonial-form-container">
          <div className="testimonial-form-heading">
            <div>
              <h3>Comparte tu experiencia</h3>
              <p>Cuéntanos cómo fue tu visita a nuestro parque.</p>
            </div>

            <button
              type="button"
              className="testimonial-close"
              onClick={() => setMostrarFormulario(false)}
              aria-label="Cerrar formulario"
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={publicarTestimonio} className="testimonial-form">
            <label>
              Tu nombre
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Escribe tu nombre"
              />
            </label>

            <label>
              ¿De dónde nos visitas?
              <input
                type="text"
                value={lugar}
                onChange={(e) => setLugar(e.target.value)}
                placeholder="Ciudad o municipio"
              />
            </label>

            <label>
              Tu comentario
              <textarea
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                placeholder="Cuéntanos qué te pareció tu visita..."
                rows="4"
              />
            </label>

            <label>
              Tu calificación
              <select
                value={calificacion}
                onChange={(e) => setCalificacion(Number(e.target.value))}
              >
                <option value={5}>5 estrellas - Excelente</option>
                <option value={4}>4 estrellas - Muy bueno</option>
                <option value={3}>3 estrellas - Bueno</option>
                <option value={2}>2 estrellas - Regular</option>
                <option value={1}>1 estrella - Puede mejorar</option>
              </select>
            </label>

            <button type="submit" className="testimonial-submit">
              Publicar comentario
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default Testimonios;
