// RegisterProducts.jsx
import React from "react";
import ProductForm from "./ProductForm.jsx"
import useDataProducts from "../Products/Hooks/useDataProducts.jsx";

const RegisterProducts = () => {
  const {
    products,
    productToEdit,
    saveProduct,
    updateProduct,
  } = useDataProducts();

  return (
    <ProductForm
      products={products}
      productToEdit={productToEdit}
      saveProduct={saveProduct}
      updateProduct={updateProduct}
    />
  );
};

export default RegisterProducts;
