import React from "react";
import "/src/components/products/ProdCard.css";

// Functional component that renders a product card
function ProdCard({ item, addToCart, getCartItemQuantity }) {
  // Destructuring item object to get required properties
  const { name, imgURL, price, stock, uuid } = item;

  // Determine if the item is out of stock
  const isOutOfStock = getCartItemQuantity(uuid) >= stock;
  // Get the current quantity of the item in the cart
  const cartQuantity = getCartItemQuantity(uuid);

  // Event handler for adding an item to the cart
  const handleAddToCart = (event) => {
    event.stopPropagation();
    addToCart(item);
  };

  // Render product card
  return (
    <div className="card-container">
      <div className="card-header">
        <h3>{name}</h3>
        <a href={imgURL} target="_blank" rel="noreferrer"></a>
      </div>
      <img src={imgURL} alt={name} />
      <h4>$ {price}</h4>
      <h4>In stock: {stock}</h4>
      <h4>In cart: {cartQuantity}</h4>
      <button
        onClick={handleAddToCart}
        disabled={isOutOfStock}
        className={`add-to-cart-btn ${isOutOfStock ? "disabled" : ""}`}
      >
        Add to cart
      </button>
    </div>
  );
}

// Export the memoized version of the component to avoid unnecessary re-renders
export default React.memo(ProdCard);
