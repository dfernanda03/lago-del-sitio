
import Encabezado from './components/Encabezado';

import './App.css';
import Hero from './components/Hero';
import Experiencias from './components/Experiencias';
import PlanVisita from './components/PlanVisita';
import Nosotros from './components/Nosotros';
import Galeria from './components/Galeria';
import Testimonios from './components/Testimonios';
import Comunidad from './components/Comunidad';
import Contacto from './components/Contacto';
import InformacionLegal from './components/InformacionLegal';
import PiePagina from './components/PiePagina';

function App() {
  return (
    <div className="site-shell">

      <Encabezado />

      <main>
          <Hero />
           <Experiencias />
           <PlanVisita />
           <Nosotros />
           <Galeria />
           <Testimonios />
           <Comunidad />
           <Contacto />
           <InformacionLegal />
           <PiePagina />
    
      </main>

    </div>
  );
}

export default App;
