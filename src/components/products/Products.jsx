import "/src/components/products/products.css";
import ProdCard from "./ProdCard";

function Products({ data, addToCart, getCartItemQuantity }) {
  return (
    <div className="product-container">
      {data.map((item) => (
        <ProdCard
          key={item.uuid} // Use the item's uuid as a unique key for the ProdCard component
          item={item}
          addToCart={() => addToCart(item)} // Pass down the addToCart function with item as an argument
          getCartItemQuantity={getCartItemQuantity} // Pass down the getCartItemQuantity function
        />
      ))}
    </div>
  );
}

export default Products;
