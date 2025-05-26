import React, { useState, useEffect } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>Nombre</label>
      <input value={nombre} onChange={e => setNombre(e.target.value)} />

      <label>Precio</label>
      <input value={precio} onChange={e => setPrecio(e.target.value)} />

      <label>Stock</label>
      <input value={stock} onChange={e => setStock(e.target.value)} />

      <label>Marca</label>
      <input value={marca} onChange={e => setMarca(e.target.value)} />

      <label>Descripción</label>
      <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)} />

      <button type="submit">{productToEdit ? 'Actualizar Producto' : 'Agregar Producto'}</button>
    </form>
  );
}
