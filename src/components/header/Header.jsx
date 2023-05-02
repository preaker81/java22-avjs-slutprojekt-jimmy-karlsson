import React from "react";
import "/src/components/header/header.css"; // Import header CSS
import logo from "/src/img/logo.png"; // Import logo image
//! Comments done
function Header({
  view,
  showCheckout, // Determines if the checkout view is active
  cart, // Shopping cart array
  onShowProducts, // Function to switch the view to the "products" view
  onShowShoppingCart, // Function to switch the view to the "checkout" view
  onSearchInputChange, // Function to handle changes in the search input field
  searchInput, // Current search input value used to filter products
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
              <p className="header-btn-checkout-amount">
                {cart.reduce(
                  (total, currentItem) => total + currentItem.quantity,
                  0
                )}
              </p>
            </button>
          </li>
        </ul>
      </nav>

      {/* Only show the search bar when not in checkout or checkedOutDisp view */}
      {!showCheckout && view !== "checkedOutDisp" && (
        <div className="searchbar">
          {/* Input field to filter products */}
          <input
            className="searchbar-input"
            type="text"
            value={searchInput}
            onChange={onSearchInputChange}
            placeholder="Search by name..."
          />
        </div>
      )}
    </header>
  );
}

export default Header;
