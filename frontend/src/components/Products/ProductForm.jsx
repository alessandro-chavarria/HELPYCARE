import React, { useState, useEffect } from 'react';
import "./ProductForm.css"

export default function AgregarProducto({ productToEdit, saveProduct, updateProduct }) {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [marca, setMarca] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    if (productToEdit) {
      setNombre(productToEdit.nombre || '');
      setPrecio(productToEdit.precio || '');
      setStock(productToEdit.stock || '');
      setMarca(productToEdit.marca || '');
      setDescripcion(productToEdit.descripcion || '');
    } else {
      setNombre('');
      setPrecio('');
      setStock('');
      setMarca('');
      setDescripcion('');
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { nombre, precio, stock, marca, descripcion };

    if (productToEdit) {
      updateProduct(productToEdit.id, productData);
    } else {
      saveProduct(productData);
    }

    // limpiar si es nuevo
    if (!productToEdit) {
      setNombre('');
      setPrecio('');
      setStock('');
      setMarca('');
      setDescripcion('');
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
  <h2>{productToEdit ? 'Actualizar Producto' : 'Agregar Producto'}</h2>

  <div className="form-grid">
    <div className="form-group">
      <label>Nombre</label>
      <input value={nombre} onChange={e => setNombre(e.target.value)} />
    </div>

    <div className="form-group">
      <label>Precio</label>
      <input type= "number"  value={precio} onChange={e => setPrecio(e.target.value)} />
    </div>

    <div className="form-group">
      <label>Stock</label>
      <input type= "number" value={stock} onChange={e => setStock(e.target.value)} />
    </div>

    <div className="form-group">
      <label>Marca</label>
      <input value={marca} onChange={e => setMarca(e.target.value)} />
    </div>

    <div className="form-group full-width">
      <label>Descripción</label>
      <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)}></textarea>
    </div>
  </div>

  <button type="submit" className="btn-submit">
    {productToEdit ? 'Actualizar Producto' : 'Agregar Producto'}
  </button>
</form>


  );
}
