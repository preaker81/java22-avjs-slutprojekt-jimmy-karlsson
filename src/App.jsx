import React, { useState, useEffect, useReducer } from "react";
import { getFirebaseData } from "/src/js/firebase";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Sidebar from "./components/sidebar/Sidebar";
import "/src/app.css";
import Checkout from "./components/checkout/Checkout";
import CheckedoutDisp from "./components/CheckedoutDisp/CheckedoutDisp";
import { cartReducer } from "/src/js/reducers/cartReducer.js";

function App() {
  const [data, setData] = useState([]);
  const [selectedColors, setSelectedColors] = useState(new Set());
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);
  const [cart, dispatchCart] = useReducer(cartReducer, []); // cartReducer is extracted to seperate file
  const [view, setView] = useState("products");
  const [checkoutCounter, setCheckoutCounter] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getFirebaseData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data in MyComponent:", error);
      }
    }
    fetchData();
  }, [checkoutCounter]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 20) {
      setShowBackToTopButton(true);
    } else {
      setShowBackToTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleColorCheckboxChange = (event) => {
    const color = event.target.value;
    const newSelectedColors = new Set(selectedColors);

    if (event.target.checked) {
      newSelectedColors.add(color);
    } else {
      newSelectedColors.delete(color);
    }

    setSelectedColors(newSelectedColors);
  };

  const filteredData = data.filter((item) =>
    item.colorIdentity.some((color) => selectedColors.has(color))
  );

  const showProducts = () => {
    setView("products");
  };

  const showShoppingCart = () => {
    setView("checkout");
  };

  const handleCheckoutComplete = () => {
    setView("checkedOutDisp");
    setCheckoutCounter(checkoutCounter + 1);
  };

  const getCartItemQuantity = (itemId) => {
    const itemInCart = cart.find((item) => item.uuid === itemId);
    return itemInCart ? itemInCart.quantity : 0;
  };

  const addToCart = (item) => {
    dispatchCart({ type: "ADD_ITEM", item });
  };

  const clearCart = () => {
    dispatchCart({ type: "CLEAR_CART" });
  };

  const removeFromCart = (uuid) => {
    dispatchCart({ type: "REMOVE_ITEM", uuid });
  };

  const updateCartItemQuantity = (uuid, newQuantity) => {
    dispatchCart({ type: "UPDATE_ITEM_QUANTITY", uuid, newQuantity });
  };

  return (
    <div>
      <Header
        view={view}
        showCheckout={view === "checkout"}
        cart={cart}
        onShowProducts={showProducts}
        onShowShoppingCart={showShoppingCart}
      />
      {view === "products" && (
        <Sidebar onColorCheckboxChange={handleColorCheckboxChange} />
      )}
      {view === "products" && (
        <Products
          data={selectedColors.size > 0 ? filteredData : data}
          addToCart={addToCart}
          getCartItemQuantity={getCartItemQuantity}
        />
      )}
      {view === "checkout" && (
        <Checkout
          cart={cart}
          onRemoveItem={removeFromCart}
          onUpdateCartItemQuantity={updateCartItemQuantity}
          onClearCart={clearCart}
          onCheckoutComplete={handleCheckoutComplete}
          onShowProducts={showProducts}
        />
      )}
      {view === "checkedOutDisp" && <CheckedoutDisp />}

      {showBackToTopButton && (
        <button onClick={scrollToTop} className="back-to-top">
          Back to Top
        </button>
      )}
    </div>
  );
}

export default App;
