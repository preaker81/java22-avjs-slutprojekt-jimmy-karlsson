import React from "react";
import "/src/components/checkout/checkout.css";
import CheckOutItem from "./CheckoutItem";
import { getFirebaseData, updateStock } from "/src/js/firebase";

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

  const handleCheckout = async () => {
    let allStocksUpdated = true;

    // Loop through all the items in the cart
    for (const item of cart) {
      const stockUpdated = await updateStock(item.uuid, item.quantity);

      if (!stockUpdated) {
        allStocksUpdated = false;
        break;
      }
    }

    if (allStocksUpdated) {
      // Clear the cart if all stocks are updated successfully
      onClearCart();
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
          <button className="checkout-clearbtn" onClick={onClearCart}>
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

export default CheckOut;
