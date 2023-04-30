import React from "react";
import "/src/components/products/ProdCard.css";

function ProdCard({ item, addToCart, getCartItemQuantity }) {
  const { name, imgURL, price, stock, uuid } = item;
  const isOutOfStock = getCartItemQuantity(uuid) >= stock;
  const cartQuantity = getCartItemQuantity(uuid);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    addToCart(item);
  };

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

export default React.memo(ProdCard);
