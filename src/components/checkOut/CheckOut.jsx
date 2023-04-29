import React from "react";
import "/src/components/checkout/checkOut.css";
import CheckOutItem from "./CheckOutItem";

function CheckOut() {
  return (
    <section className="checkout-container">
      <div className="checkout-headings">
        <h3 className="checkout-header">Shopping Cart</h3>
        <div className="checkout-btndiv">
          <button className="checkout-buybtn">Checkout</button>
          <button className="checkout-clearbtn">Clear Cart</button>
        </div>
      </div>
      <div className="checkout-item-container">
        <CheckOutItem />
      </div>
      <div className="checkout-sumdiv">
        <h1>Total: $ 9,999,999</h1>
      </div>
    </section>
  );
}

export default CheckOut;
