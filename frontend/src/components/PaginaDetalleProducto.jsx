import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PaginaDetalleProducto.css';
import Comentarios from './Comentarios';

const PaginaDetalleProducto = () => {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => {
    setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="contenedor-pagina-producto">
      <div className="cabecera">
        <div className="logo">
          <Link to="/">
            <span>miAyuda</span>
          </Link>
        </div>
        <div className="navegacion">
          <Link to="/">
            <span>Inicio</span>
          </Link>
          <span>Productos</span>
          <span>Sobre Nosotros</span>
          <div className="icono-carrito">
            <i className="fa fa-shopping-cart"></i>
          </div>
        </div>
      </div>

      <div className="migas-de-pan">
        <span>Inicio / Productos / Audífono amplificador</span>
      </div>

      <div className="contenido-producto">
        <div className="imagenes-producto">
          <img src="/src/assets/audifono-principal.jpg" alt="Audífono amplificador" className="imagen-principal" />
          <div className="imagenes-pequenas">
            <img src="/src/assets/audifono-1.jpg" alt="Audífono vista 1" />
            <img src="/src/assets/audifono-2.jpg" alt="Audífono vista 2" />
            <img src="/src/assets/audifono-3.jpg" alt="Audífono vista 3" />
            <img src="/src/assets/audifono-4.jpg" alt="Audífono vista 4" />
          </div>
        </div>

        <div className="info-producto">
          <h2>Audífono Amplificador</h2>
          <div className="precio-producto">
            <span className="precio">$299.99</span>
          </div>
          
          <div className="selector-cantidad">
            <button onClick={decrementar} className="btn-cantidad">-</button>
            <span className="cantidad">{cantidad}</span>
            <button onClick={incrementar} className="btn-cantidad">+</button>
          </div>
          
          <button className="btn-agregar-carrito">AGREGAR AL CARRITO</button>
          
          <div className="descripcion-producto">
            <h3>PRODUCTO:</h3>
            <p>AMPLIFICADOR AUDITIVO RECARGABLE CON CONTROL DE VOLUMEN Y BAJO DE BATERÍA</p>
            
            <h3>CARACTERÍSTICAS:</h3>
            <ul>
              <li>AMPLIFICA HASTA 40DB</li>
              <li>CONTROL DE VOLUMEN</li>
              <li>BATERÍA RECARGABLE</li>
              <li>ALTA CALIDAD DE SONIDO</li>
              <li>MICRÓFONO DE CONDENSADOR</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="seccion-resenas">
        <h3>Reseñas</h3>
        <div className="calificaciones">
          <div className="estrellas-calificacion">
            <span className="valor-calificacion">5.0</span>
            <div className="estrellas">★★★★★</div>
          </div>
          <div className="barras-calificacion">
            <div className="barra-calificacion">
              <span>5</span>
              <div className="contenedor-barra">
                <div className="relleno-barra" style={{ width: '100%' }}></div>
              </div>
              <span>100%</span>
            </div>
            <div className="barra-calificacion">
              <span>4</span>
              <div className="contenedor-barra">
                <div className="relleno-barra" style={{ width: '0%' }}></div>
              </div>
              <span>0%</span>
            </div>
            <div className="barra-calificacion">
              <span>3</span>
              <div className="contenedor-barra">
                <div className="relleno-barra" style={{ width: '0%' }}></div>
              </div>
              <span>0%</span>
            </div>
            <div className="barra-calificacion">
              <span>2</span>
              <div className="contenedor-barra">
                <div className="relleno-barra" style={{ width: '0%' }}></div>
              </div>
              <span>0%</span>
            </div>
            <div className="barra-calificacion">
              <span>1</span>
              <div className="contenedor-barra">
                <div className="relleno-barra" style={{ width: '0%' }}></div>
              </div>
              <span>0%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Añadimos el componente de comentarios aquí */}
      <Comentarios />

      <div className="pie-pagina">
        <p>© 2025 miAyuda. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default PaginaDetalleProducto;