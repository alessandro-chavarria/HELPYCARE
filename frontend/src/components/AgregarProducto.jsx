import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import useDataProducts from "./Products/Hooks/useDataProducts.jsx";
import ProductForm from "./Products/ProductForm.jsx";
import ListProducts from "./Products/ListProducts.jsx";
import '../pages/PaginaInicio.css';

const AgregarProducto = () => {
  const {
    products,
    loading,
    productToEdit,
    setProductToEdit,
    saveProduct,
    updateProduct,
    deleteProduct,
  } = useDataProducts();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="/src/assets/logo.png" alt="HelpyCare Logo" className="logo-img" />
          <span className="logo-text"></span>
        </div>

        <div className="mobile-menu-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={handleHomeClick}>Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
            <li><Link to="/ventas-empleado">Ventas</Link></li>
            <li><Link to="/agregar-producto" className="active">Agregar Producto</Link></li>
          </ul>
        </nav>

        <div className="header-right">
          <Link to="/carrito" className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </div>

      <div className="agregar-producto-container">
        <h1 className="page-title">Administración de Productos</h1>

        <div className="product-management-section">
          <div className="product-form-container">
            <h2>Agregar/Editar Producto</h2>
            <ProductForm
              productToEdit={productToEdit}
              setProductToEdit={setProductToEdit}
              saveProduct={saveProduct}
              updateProduct={updateProduct}
            />
          </div>

          <div className="product-list-container">
            <h2>Listado de Productos</h2>
            <ListProducts
              products={products}
              loading={loading}
              deleteProduct={deleteProduct}
              setProductToEdit={setProductToEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AgregarProducto;