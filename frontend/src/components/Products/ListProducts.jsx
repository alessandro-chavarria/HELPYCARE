import React from "react";
import CardProduct from "./CardProduct";
import "./ProductForm.css"

const ListProducts = ({ products, loading, deleteProduct, setProductToEdit }) => {
  if (loading) return <p>Cargando productos...</p>;
  if (products.length === 0) return <p>No hay productos registrados.</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <CardProduct
          key={product._id}
          product={product}
          deleteProduct={deleteProduct}
          setProductToEdit={setProductToEdit}
        />
      ))}
    </div>
  );
};

export default ListProducts;
