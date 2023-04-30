import React, { useState, useEffect } from "react";
import { getFirebaseData } from "/src/js/firebase";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Sidebar from "./components/sidebar/Sidebar";
import "/src/app.css";
import CheckOut from "./components/checkout/Checkout";

function App() {
  const [data, setData] = useState([]);
  const [selectedColors, setSelectedColors] = useState(new Set());
  const [showCheckout, setShowCheckout] = useState(false);
  const [cart, setCart] = useState([]);

  // Gets the DB information and stores it in a state
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getFirebaseData();
        console.log(result[0]);
        setData(result);
      } catch (error) {
        console.error("Error fetching data in MyComponent:", error);
      }
    }
    fetchData();
  }, []);

  // Function that is passed to Sidebar for filtering by color
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

  // Filter the DB data before passing to Products
  const filteredData = data.filter((item) =>
    item.colorIdentity.some((color) => selectedColors.has(color))
  );

  // For toggling to products
  const showProducts = () => {
    setShowCheckout(false);
  };

  // For toggling to shoppingcart
  const showShoppingCart = () => {
    setShowCheckout(true);
  };

  // For adding items to the cart
  const addToCart = (item) => {
    console.log("Adding item to cart:", item);
    setCart((prevCart) => [...prevCart, item]);
  };

  // For clearing the cart
  const clearCart = () => {
    setCart([]);
  };

    // For removing a specific item from the cart
    const removeFromCart = (uuid) => {
      setCart((prevCart) => prevCart.filter((item) => item.uuid !== uuid));
    };

  return (
    <div>
    <Header
      showCheckout={showCheckout}
      cart={cart}
      onShowProducts={showProducts}
      onShowShoppingCart={showShoppingCart}
    />
      {!showCheckout && (
        <Sidebar onColorCheckboxChange={handleColorCheckboxChange} />
      )}
      {!showCheckout && (
        <Products
          data={selectedColors.size > 0 ? filteredData : data}
          onAddToCart={addToCart}
        />
      )}
 <CheckOut cart={cart} onClearCart={clearCart} onRemoveFromCart={removeFromCart} />    </div>
  );
}

export default App;
