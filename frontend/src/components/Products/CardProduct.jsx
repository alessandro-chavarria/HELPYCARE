import React from "react";

const CardProduct = ({ product, deleteProduct, setProductToEdit }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Marca:</strong> {product.marca || "-"}</p>
      <button onClick={() => setProductToEdit(product)}>Editar</button>
      <button
        onClick={() => {
          if (window.confirm(`¿Eliminar producto "${product.name}"?`)) {
            deleteProduct(product._id);
          }
        }}
        className="btn-delete"
      >
        Eliminar
      </button>
    </div>
  );
};

export default CardProduct;
