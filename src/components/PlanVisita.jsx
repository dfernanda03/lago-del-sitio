
import { CalendarDays } from 'lucide-react';
import './PlanVisita.css';

function PlanVisita() {
  return (
    <section className="section">
      <div className="visit-plan">

        <div className="plan-intro">
          <CalendarDays size={23} />

          <p className="eyebrow">PLANEA TU VISITA</p>

          <h3>
            Todo listo para<br />
            <em>tu escapada.</em>
          </h3>

          <p>
            Una guía rápida para disfrutar cada momento sin preocupaciones.
          </p>
        </div>

        <div className="plan-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Experiencia</th>
                <th>Encontrarás</th>
                <th>Te recomendamos</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Un día en el lago</td>
                <td>Senderos, restaurante y miradores</td>
                <td>Calzado cómodo y bloqueador</td>
              </tr>

              <tr>
                <td>Fin de semana</td>
                <td>Camping, fogata y cielo estrellado</td>
                <td>Tienda, ropa abrigadora y linterna</td>
              </tr>

              <tr>
                <td>Aventura familiar</td>
                <td>Paseo a caballo y picnic</td>
                <td>Agua, gorra y mucha curiosidad</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

export default PlanVisita;
