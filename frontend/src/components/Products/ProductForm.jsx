import React, { useState, useEffect } from "react";
import "./ProductForm.css"

const ProductForm = ({ productToEdit, setProductToEdit, saveProduct, updateProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    stock: 0,
    marca: "",
  });

  useEffect(() => {
    if (productToEdit) {
      setFormData(productToEdit);
    } else {
      setFormData({
        name: "",
        price: 0,
        description: "",
        stock: 0,
        marca: "",
      });
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productToEdit) {
      updateProduct(formData);
    } else {
      saveProduct(formData);
    }
    setProductToEdit(null);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>{productToEdit ? "Actualizar Producto" : "Agregar Producto"}</h2>

      <div className="form-grid">
        <div className="form-group">
          <label>Nombre</label>
          <input name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Precio</label>
          <input
            name="price"
            type="number"
            min="0"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Stock</label>
          <input
            name="stock"
            type="number"
            min="0"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Marca</label>
          <input name="marca" value={formData.marca} onChange={handleChange} />
        </div>

        <div className="form-group full-width">
          <label>Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button type="submit" className="btn-submit">
        {productToEdit ? "Actualizar Producto" : "Agregar Producto"}
      </button>

      {productToEdit && (
        <button
          type="button"
          onClick={() => setProductToEdit(null)}
          className="btn-cancel"
        >
          Cancelar
        </button>
      )}
    </form>
  );
};

export default ProductForm;
