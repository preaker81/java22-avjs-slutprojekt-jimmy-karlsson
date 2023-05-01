import React from "react";
import "/src/components/header/header.css"; // Import header CSS
import logo from "/src/img/logo.png"; // Import logo image

function Header({
  view,
  showCheckout,
  cart,
  onShowProducts,
  onShowShoppingCart,
}) {
  return (
    <header>
      <nav className="nav-bar">
        {/* Display logo */}
        <img className="logo" src={logo} alt="logo" />
        <ul className="nav-btn-list">
          <li>
            {/* Button to show products */}
            <button className="header-btn-prod" onClick={onShowProducts}>
              Products
            </button>
          </li>
          <li>
            {/* Button to show shopping cart */}
            <button
              className="header-btn-checkout"
              onClick={onShowShoppingCart}
            >
              Shopping Cart
              {/* Show the number of items in the cart */}
              <p className="header-btn-checkout-amount">{cart.length}</p>
            </button>
          </li>
        </ul>
      </nav>

      {/* Only show the search bar when not in checkout or checkedOutDisp view */}
      {!showCheckout && view !== "checkedOutDisp" && (
        <div className="searchbar">
          <input className="searchbar-input" type="text" />
          <button className="searchbar-btn">Search</button>
        </div>
      )}
    </header>
  );
}

export default Header;
