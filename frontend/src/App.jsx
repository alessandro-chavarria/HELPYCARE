import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BienvenidaPage from './components/BienvenidaPage';
import InicioSesion from './components/InicioSesion';
import RecuperacionContra from './components/RecuperacionContra';
import PaginaDetalleProducto from './components/PaginaDetalleProducto';
import PaginaInicio from './components/PaginaInicio';
import PaginaProductos from './components/PaginaProductos';
import SobreNosotros from './components/SobreNosotros';
import FinalizarCompra from './components/FinalizarCompra';
import TerminosYCondiciones from './components/TerminosYCondiciones';
import VentasEmpleado from './components/VentasEmpleado';
import RegistroEmpleado from './components/RegistroEmpleado';
import PaginaInicio from './components/PaginaInicio';
import RegistroCliente from './components/RegistroCliente';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
 return (
    <div>
      <RegistroCliente />
    </div>
  );
return (
  <VentasEmpleado />
);
function App() {
  const [count, setCount] = useState(0);
  
  // vite ejempñ
  const ViteExample = () => (
    <div className="vite-example-container">
      <div className="logos-container">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/bienvenida" element={<BienvenidaPage />} />
          <Route path="/login" element={<InicioSesion />} />
          <Route path="/recovery" element={<RecuperacionContra />} />
          <Route path="/producto/:id" element={<PaginaDetalleProducto />} />
          <Route path="/productos" element={<PaginaProductos />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/finalizar-compra" element={<FinalizarCompra />} />
          <Route path="/terminos" element={<TerminosYCondiciones />} />
          <Route path="/vite-example" element={<ViteExample />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;