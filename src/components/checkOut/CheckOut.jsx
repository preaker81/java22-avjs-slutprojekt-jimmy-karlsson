import React from "react";
import "/src/components/checkout/checkout.css";
import CheckoutItem from "./CheckoutItem";
import { updateStock } from "/src/js/firebase"; // import db update function

function Checkout({
  cart,
  onRemoveItem,
  onUpdateCartItemQuantity,
  onClearCart,
  onCheckoutComplete,
  onShowProducts,
}) {
  // Calculate the total sum of the CheckoutItem total sums
  const totalSum = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  // Render each item in the cart as a CheckoutItem component
  const renderCheckoutItems = () => {
    return cart.map((item) => (
      <CheckoutItem
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

  // Handle the checkout process
  const handleCheckout = async () => {
    let allStocksUpdated = true;
    // Loop through all the items in the cart and update the stock
    for (const item of cart) {
      const stockUpdated = await updateStock(item.uuid, item.quantity);

      if (!stockUpdated) {
        allStocksUpdated = false;
        break;
      }
    }

    // If all stocks are updated successfully, clear the cart and complete the checkout
    if (allStocksUpdated) {
      onClearCart();
      onCheckoutComplete();
    } else {
      alert("Not enough stock for some items. Please adjust your cart.");
    }
  };

  return (
    <section className="checkout-container">
      <div className="checkout-headings">
        <h3 className="checkout-header">Shopping Cart</h3>
        <div className="checkout-btndiv">
          <button className="checkout-buybtn" onClick={handleCheckout}>
            Checkout
          </button>
          <button
            className="checkout-clearbtn"
            onClick={() => {
              onClearCart();
              onShowProducts();
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div className="checkout-sumdiv">
        <h1>Total: $ {totalSum.toFixed(2)}</h1>
      </div>
      <div className="checkout-item-container">{renderCheckoutItems()}</div>
    </section>
  );
}

export default Checkout;
