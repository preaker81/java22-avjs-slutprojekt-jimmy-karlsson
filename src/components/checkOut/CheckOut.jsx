import React from "react";
import "/src/components/checkout/checkout.css";
import CheckOutItem from "./CheckoutItem";

function CheckOut({ cart, onClearCart, onRemoveFromCart }) {
  console.log("Cart in CheckOut:", cart);
  console.log(cart);

  const renderCheckoutItems = () => {
    return cart.map((item) => (
      <CheckOutItem
        key={item.uuid}
        name={item.name}
        price={item.price}
        onRemove={() => onRemoveFromCart(item.uuid)}
      />
    ));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <section className="checkout-container">
      <div className="checkout-headings">
        <h3 className="checkout-header">Shopping Cart</h3>
        <div className="checkout-btndiv">
          <button className="checkout-buybtn">Checkout</button>
          <button className="checkout-clearbtn" onClick={onClearCart}>
            Clear Cart
          </button>
        </div>
      </div>
      <div className="checkout-item-container">{renderCheckoutItems()}</div>
      <div className="checkout-sumdiv">
        <h1>Total: $ {totalPrice.toFixed(2)}</h1>
      </div>
    </section>
  );
}

export default CheckOut;
