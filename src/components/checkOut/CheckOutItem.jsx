import React from "react";
import "/src/components/checkout/checkoutItem.css";

function CheckOutItem({ name, price, onRemove}) {
  console.log("CheckoutItem props:", { name, price });
  return (
    <div className="checkout-item">
      <h3>{name}</h3>
      <div className="checkout-item-rightdiv">
        <h3>$ {price}</h3>
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
}

export default CheckOutItem;
