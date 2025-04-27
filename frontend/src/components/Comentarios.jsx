import React from 'react';
import './Comentarios.css';

const Comentarios = () => {
  // Datos de ejemplo para los comentarios
  const comentarios = [
    {
      id: 1,
      nombre: "JOSÉ DANIEL",
      estrellas: 5,
      fecha: "24 de abril de 2025",
      comentario: "Excelente producto, me ayudó con mis necesidades de del oído muy bien, recepción rápida y llegó el producto en buenas condiciones.",
      likes: 3,
      dislikes: 0
    },
    {
      id: 2,
      nombre: "ALEXANDER",
      estrellas: 5,
      fecha: "22 de marzo de 2025",
      comentario: "Muy buena calidad de sonido.",
      likes: 1,
      dislikes: 0
    },
    {
      id: 3,
      nombre: "MIGUEL ANTONIO",
      estrellas: 5,
      fecha: "20 de marzo de 2025",
      comentario: "Audífonos tienen una buena amplificación.",
      likes: 2,
      dislikes: 0
    },
    {
      id: 4,
      nombre: "FERNANDO J",
      estrellas: 5,
      fecha: "15 de marzo de 2025",
      comentario: "Buenísimo, funciona a la perfección, y es recargable!",
      likes: 1,
      dislikes: 0
    },
    {
      id: 5,
      nombre: "JUAN LEÓN",
      estrellas: 5,
      fecha: "10 de marzo de 2025",
      comentario: "Funciona perfectamente y es recargable, bueno.",
      likes: 0,
      dislikes: 0
    }
  ];

  // Componente para mostrar las estrellas
  const Estrellas = ({ cantidad }) => {
    return (
      <div className="estrellas-comentario">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < cantidad ? "estrella-llena" : "estrella-vacia"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="comentarios-container">
      <h2>Comentarios</h2>
      
      <div className="lista-comentarios">
        {comentarios.map((comentario) => (
          <div key={comentario.id} className="comentario">
            <div className="comentario-encabezado">
              <div className="comentario-usuario">
                <span className="nombre-usuario">{comentario.nombre}</span>
                <Estrellas cantidad={comentario.estrellas} />
              </div>
              <span className="fecha-comentario">{comentario.fecha}</span>
            </div>
            
            <div className="comentario-contenido">
              <p>{comentario.comentario}</p>
            </div>
            
            <div className="comentario-acciones">
              <div className="comentario-feedback">
                <div className="comentario-utilidad">
                  <span>¿Te resultó útil?</span>
                </div>
                <div className="botones-feedback">
                  <button className="btn-feedback like">
                    <i className="fa fa-thumbs-up"></i>
                    <span className="contador">{comentario.likes}</span>
                  </button>
                  <button className="btn-feedback dislike">
                    <i className="fa fa-thumbs-down"></i>
                    <span className="contador">{comentario.dislikes}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="boton-volver-arriba">
        <button className="btn-arriba">
          <i className="fa fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default Comentarios;