import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BienvenidaPage from './components/BienvenidaPage';
import InicioSesion from './components/InicioSesion';
import RecuperacionContra from './components/RecuperacionContra';
import PaginaDetalleProducto from './components/PaginaDetalleProducto';
import PaginaInicio from './components/PaginaInicio';
import PaginaProductos from './components/PaginaProductos';
import SobreNosotros from './components/SobreNosotros'; // Importamos el nuevo componente

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {/* Ruta para la página de inicio principal */}
        <Route path="/" element={<PaginaInicio />} />
        
        {/* Ruta para la página de bienvenida */}
        <Route path="/bienvenida" element={<BienvenidaPage />} />
        
        {/* Ruta para la página de inicio de sesión */}
        <Route path="/login" element={<InicioSesion />} />
        
        {/* Ruta para la página de recuperación de contraseña */}
        <Route path="/recovery" element={<RecuperacionContra />} />
        
        {/* Ruta para la página de detalle de producto */}
        <Route path="/producto/:id" element={<PaginaDetalleProducto />} />

        {/* Ruta para la página de productos */}
        <Route path="/productos" element={<PaginaProductos />} />
        
        {/* Ruta para la página de sobre nosotros */}
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        
        {/* Página de ejemplo de Vite+React (puedes eliminarla más adelante) */}
        <Route path="/vite-example" element={
          <>
            <div>
              <a href="https://vite.dev" target="_blank" rel="noreferrer">
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
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;