import React from "react";
import "/src/components/checkout/checkout.css";
import CheckOutItem from "./CheckoutItem";

function CheckOut({
  cart,
  onRemoveItem,
  onUpdateCartItemQuantity,
  onClearCart,
}) {
  // Calculate the total sum of the CheckoutItem total sums
  const totalSum = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const renderCheckoutItems = () => {
    return cart.map((item) => (
      <CheckOutItem
        key={item.uuid}
        uuid={item.uuid}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        stock={item.stock}
        onRemoveItem={onRemoveItem}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
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
        <div className="checkout-sumdiv">
          <h1>Total: $ {totalSum.toFixed(2)}</h1>
        </div>
      </div>
      <div className="checkout-item-container">{renderCheckoutItems()}</div>
    </section>
  );
}

export default CheckOut;
