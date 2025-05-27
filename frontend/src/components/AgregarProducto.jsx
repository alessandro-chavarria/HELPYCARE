import React from "react";
import useDataProducts from "./Products/Hooks/useDataProducts.jsx";
import ProductForm from "./Products/ProductForm.jsx";
import ListProducts from "./Products/ListProducts.jsx";
import { Link, useLocation } from 'react-router-dom';
import '../pages/PaginaInicio.css';

const ProductsPage = () => {
  const {
    products,
    loading,
    productToEdit,
    setProductToEdit,
    saveProduct,
    updateProduct,
    deleteProduct,
  } = useDataProducts();

   const location = useLocation();
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

        <nav className="nav-menu">
          <ul>
            <li><Link to="/" className="active" onClick={handleHomeClick}>Inicio</Link></li>
            <li><Link to="/productos" className="active">Productos</Link></li>
            <li><Link to="/sobre-nosotros" className="active">Sobre Nosotros</Link></li>
            <li><Link to="/ventas-empleado" className="active">Ventas</Link></li>
          </ul>
        </nav>
      </div>

    <div className="products-page-container">
      <h1>Administración de Productos</h1>

      <ProductForm
        productToEdit={productToEdit}
        setProductToEdit={setProductToEdit}
        saveProduct={saveProduct}
        updateProduct={updateProduct}
      />

      <ListProducts
        products={products}
        loading={loading}
        deleteProduct={deleteProduct}
        setProductToEdit={setProductToEdit}
      />
    </div>
    </>
  );
};

export default ProductsPage;
