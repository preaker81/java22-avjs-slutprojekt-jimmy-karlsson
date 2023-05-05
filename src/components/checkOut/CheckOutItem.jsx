import React from "react";
import "/src/components/checkout/checkoutItem.css";
//! Commenting done
// Component receives props related to the cart item and functions to remove and update the quantity of the item in the cart.
function CheckoutItem({
  uuid, // Passed from Products.jsx where it is taken from the cart state
  name, // Passed from Products.jsx where it is taken from the cart state
  price, // Passed from Products.jsx where it is taken from the cart state
  quantity, // Passed from Products.jsx where it is taken from the cart state
  stock, // Passed from App.jsx via Products.jsx
  onRemoveItem, // Passed from App.jsx via Products.jsx
  onUpdateCartItemQuantity, // Passed from App.jsx via Products.jsx
}) {
  // Handle the change of item quantity in the cart by calling onUpdateCartItemQuantity with the updated quantity.
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
        {/* Input field to update the item quantity with min and max limits */}
        <input
          type="number"
          min="0"
          max={stock}
          value={quantity}
          onChange={handleQuantityChange}
        />
        {/* Button to remove the item from the cart */}
        <button onClick={() => onRemoveItem(uuid)}>Remove</button>
      </div>
    </div>
  );
}

export default CheckoutItem;
