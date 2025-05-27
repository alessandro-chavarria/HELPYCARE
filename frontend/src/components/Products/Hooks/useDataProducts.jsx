import { useEffect, useState } from "react";

const useDataProducts = () => {
  const API = "http://localhost:4000/api/product"; 

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Traer todos los productos
  const fetchProducts = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Error al obtener productos");
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Guardar nuevo producto
  const saveProduct = async (data) => {
    if (
      !data.name?.trim() ||
      data.price <= 0 ||
      !data.description?.trim() ||
      data.stock < 0
    ) {
      console.warn("Datos incompletos");
      return;
    }

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          price: data.price,
          description: data.description,
          stock: data.stock,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al guardar el producto");
      }

      await fetchProducts();

      // Limpiar campos
      setName("");
      setPrice(0);
      setDescription("");
      setStock(0);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Eliminar producto
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el producto");
      }

      await fetchProducts();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Actualizar producto
  const updateProduct = async (updatedData) => {
    if (
      !updatedData.id ||
      !updatedData.name?.trim() ||
      updatedData.price <= 0 ||
      !updatedData.description?.trim() ||
      updatedData.stock < 0
    ) {
      console.warn("Datos incompletos");
      return;
    }

    try {
      const response = await fetch(`${API}/${updatedData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: updatedData.name,
          price: updatedData.price,
          description: updatedData.description,
          stock: updatedData.stock,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el producto");
      }

      await fetchProducts();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Cargar productos al inicio
  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    id, setId,
    name, setName,
    price, setPrice,
    description, setDescription,
    stock, setStock,
    products,
    loading,
    fetchProducts,
    saveProduct,
    deleteProduct,
    updateProduct,
  };
};

export default useDataProducts;
