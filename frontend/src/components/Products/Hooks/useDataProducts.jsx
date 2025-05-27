import { useState, useEffect } from "react";

const useDataProducts = () => {
  const API = "http://localhost:4000/api/product";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productToEdit, setProductToEdit] = useState(null);

  // Traer productos
  const fetchProducts = async () => {
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error("Error al obtener productos");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Crear producto
  const saveProduct = async (data) => {
    if (!data.name?.trim() || data.price <= 0 || !data.description?.trim() || data.stock < 0) {
      console.warn("Datos incompletos");
      return;
    }
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al guardar producto");
      await fetchProducts();
    } catch (e) {
      console.error(e);
    }
  };

  // Actualizar producto
  const updateProduct = async (data) => {
    if (
      !data._id ||
      !data.name?.trim() ||
      data.price <= 0 ||
      !data.description?.trim() ||
      data.stock < 0
    ) {
      console.warn("Datos incompletos para actualizar");
      return;
    }
    try {
      const res = await fetch(`${API}/${data._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          price: data.price,
          description: data.description,
          stock: data.stock,
          marca: data.marca,
        }),
      });
      if (!res.ok) throw new Error("Error al actualizar producto");
      await fetchProducts();
      setProductToEdit(null);
    } catch (e) {
      console.error(e);
    }
  };

  // Eliminar producto
  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`${API}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Error al eliminar producto");
      await fetchProducts();
    } catch (e) {
      console.error(e);
    }
  };

  return {
    products,
    loading,
    productToEdit,
    setProductToEdit,
    saveProduct,
    updateProduct,
    deleteProduct,
  };
};

export default useDataProducts;
