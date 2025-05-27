import React from "react";
import ProductForm from "./ProductForm.jsx";
import useDataProducts from "../Products/Hooks/useDataProducts.jsx";

const RegisterProducts = () => {
  const {
    productToEdit,
    setProductToEdit,
    saveProduct,
    updateProduct,
  } = useDataProducts();

  return (
    <ProductForm
      productToEdit={productToEdit}
      setProductToEdit={setProductToEdit}
      saveProduct={saveProduct}
      updateProduct={updateProduct}
    />
  );
};

export default RegisterProducts;
