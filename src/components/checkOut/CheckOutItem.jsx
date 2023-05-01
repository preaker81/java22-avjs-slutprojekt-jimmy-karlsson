import React from "react";
import "/src/components/checkout/checkoutItem.css";

function CheckoutItem({
  uuid,
  name,
  price,
  quantity,
  stock,
  onRemoveItem,
  onUpdateCartItemQuantity,
}) {
  // Handle the change of item quantity in the cart
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    onUpdateCartItemQuantity(uuid, newQuantity);
  };

  return (
    <div className="checkout-item">
      <h3>{name}</h3>
      <h3>Price: $ {price}</h3>
      <h3>Total: $ {(price * quantity).toFixed(2)}</h3>
      <div className="checkout-item-rightdiv">
        <input
          type="number"
          min="0"
          max={stock}
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={() => onRemoveItem(uuid)}>Remove</button>
      </div>
    </div>
  );
}

export default CheckoutItem;
