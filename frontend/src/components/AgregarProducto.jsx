import React from 'react';
import useDataProducts from './Products/Hooks/useDataProducts.jsx';
import RegisterProducts from './Products/RegisterProducts.jsx';
import ListProducts from './Products/ListProducts.jsx';

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

  return (
    <div className="products-page-container">
      <h1>Administración de Productos</h1>
      <RegisterProducts
        productToEdit={productToEdit}
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
  );
};

export default ProductsPage;
