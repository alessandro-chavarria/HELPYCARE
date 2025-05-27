// CardProduct.jsx
import useDataProducts from "../Products/Hooks/useDataProducts"

const {updateProduct} = useDataProducts();
const CardProduct = ({ product, deleteProduct, setProductToEdit }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>

      <button onClick={() => updateProductToEdit(product)}>Editar</button>
      <button onClick={() => deleteProduct(product._id)}>Eliminar</button>
    </div>
  );
};

export default CardProduct;
