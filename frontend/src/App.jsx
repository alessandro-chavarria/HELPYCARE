import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import componentes existentes
import BienvenidaPage from './pages/BienvenidaPage';
import InicioSesion from './pages/InicioSesion';
import RecuperacionContra from './pages/RecuperacionContra';
import PaginaDetalleProducto from './pages/PaginaDetalleProducto';
import PaginaInicio from './pages/PaginaInicio';
import SobreNosotros from './pages/SobreNosotros';
import FinalizarCompra from './components/FinalizarCompra.jsx';
import TerminosYCondiciones from './components/TerminosYCondiciones';
import VentasEmpleado from './pages/VentasEmpleado';

// Importa AgregarProductos que tienes en /pages/products
import AgregarProductos from './components/AgregarProducto.jsx';
import PaginaProductos from './pages/PaginaProductos.jsx';

// Import logos y estilos
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          {/* Página principal y autenticación */}
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/iniciosesion" element={<InicioSesion />} />
          <Route path="/login" element={<InicioSesion />} />
          <Route path="/recovery" element={<RecuperacionContra />} />

          {/* Páginas principales */}
          <Route path="/inicio" element={<PaginaInicio />} />
          <Route path="/bienvenida" element={<BienvenidaPage />} />
          
          {/* Producto detalle */}
          <Route path="/producto/:id" element={<PaginaDetalleProducto />} />
          
          {/* Ruta para agregar productos */}
          <Route path="/agregar-producto" element={<AgregarProductos />} />

          {/* Ruta productos (puedes usar otra página para listar o gestionar) */}

          { <Route path="/productos" element={<PaginaProductos />}/> }

          {/* Otros */}
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/finalizar-compra" element={<FinalizarCompra />} />
          <Route path="/terminos" element={<TerminosYCondiciones />} />
          <Route path="/ventas-empleado" element={<VentasEmpleado />} />
          
          {/* Ejemplo Vite */}
          <Route path="/vite-example" element={
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
                <button onClick={() => alert('Ejemplo de Vite')}>¡Hola!</button>
                <p>Edita <code>src/App.jsx</code> y guarda para probar HMR</p>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
