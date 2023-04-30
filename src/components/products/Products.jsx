import "/src/components/products/products.css";
import ProdCard from "./ProdCard";

function Products({ data, addToCart, getCartItemQuantity }) {
  return (
    <div className="product-container">
      {data.map((item) => (
        <ProdCard
          key={item.uuid}
          item={item}
          addToCart={() => addToCart(item)}
          getCartItemQuantity={getCartItemQuantity}
        />
      ))}
    </div>
  );
}

export default Products;
